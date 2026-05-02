// library.js — Central Resources
document.addEventListener("DOMContentLoaded", () => {
  const { BOOKS } = window.CATALOG;
  let activeFilter = "all", searchQuery = "";

  const params = new URLSearchParams(window.location.search);
  if (params.get("subject")) {
    activeFilter = params.get("subject");
    document.querySelectorAll(".pill").forEach(p =>
      p.classList.toggle("active", p.dataset.filter === activeFilter)
    );
  }

  function renderCard(item) {
    const coverHtml = window.renderCover(item.cover, item.title, "📄");
    const isExternal = item.file.startsWith("http");
    return `<div class="card">
      <div class="card-cover">
        ${coverHtml}
        <span class="card-badge">${item.type.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <div class="card-subject">${item.subject.replace(/-/g," ")}</div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-author">${item.author || ""}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-meta">${item.edition || ""} ${item.year || ""}</span>
          <a href="${item.file}" ${isExternal ? 'target="_blank" rel="noopener"' : "download"} class="card-dl">↓ Download</a>
        </div>
      </div>
    </div>`;
  }

  function render() {
    let items = BOOKS;
    if (activeFilter !== "all") items = items.filter(i => i.subject === activeFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        (i.author || "").toLowerCase().includes(q) ||
        i.subject.includes(q) ||
        (i.tags || []).some(t => t.includes(q)) ||
        i.desc.toLowerCase().includes(q)
      );
    }
    document.getElementById("libraryCount").textContent = `${items.length} item${items.length !== 1 ? "s" : ""}`;
    document.getElementById("libraryGrid").innerHTML = items.map(renderCard).join("");
    document.getElementById("emptyState").style.display = items.length ? "none" : "flex";
  }

  document.getElementById("filterPills").addEventListener("click", e => {
    if (e.target.classList.contains("pill")) {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      activeFilter = e.target.dataset.filter;
      render();
    }
  });
  document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value;
    render();
  });
  render();
});
