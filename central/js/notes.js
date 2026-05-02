// notes.js — Central Resources
document.addEventListener("DOMContentLoaded", () => {
  const { NOTES } = window.CATALOG;
  let activeFilter = "all", searchQuery = "";

  function renderNoteCard(item) {
    const sub = item.subject.replace(/-/g, " ");
    const coverHtml = window.renderCover(item.cover, item.title, "📝");
    return `<div class="note-card">
      <div class="note-card-cover">
        ${coverHtml}
        <span class="card-badge">${item.type.toUpperCase()}</span>
      </div>
      <div class="note-card-body">
        <div class="note-meta-row">
          <span class="card-subject">${sub}</span>
          <span class="note-date">${formatDate(item.date)}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <div class="note-contributor">
          <span class="contrib-dot">✦</span> by
          <strong><a href="profile.html?id=${item.contributorId}" style="color:var(--accent)">${item.contributor || "Anonymous"}</a></strong>
        </div>
        <p class="card-desc">${item.desc}</p>
        <div class="note-footer">
          <div class="note-tags">${(item.tags||[]).slice(0,3).map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
          <a href="${item.file}" ${item.file.startsWith("http") ? 'target="_blank" rel="noopener"' : "download"} class="card-dl">↓ Download</a>
        </div>
      </div>
    </div>`;
  }

  function formatDate(str) {
    if (!str) return "";
    return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }

  function render() {
    let items = NOTES;
    if (activeFilter !== "all") items = items.filter(i => i.type === activeFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        (i.contributor||"").toLowerCase().includes(q) ||
        i.subject.includes(q) ||
        (i.tags||[]).some(t => t.includes(q)) ||
        i.desc.toLowerCase().includes(q)
      );
    }
    document.getElementById("notesCount").textContent = `${items.length} note${items.length!==1?"s":""}`;
    document.getElementById("notesGrid").innerHTML = items.map(renderNoteCard).join("");
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
