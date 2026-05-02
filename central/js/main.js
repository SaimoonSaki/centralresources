// main.js — homepage logic — Central Resources

document.addEventListener("DOMContentLoaded", () => {
  const { BOOKS, NOTES, VAULT_BOOKS } = window.CATALOG;
  const { CONTRIBUTORS, getBadge } = window.LEADERBOARD;

  document.getElementById("bookCount").textContent = BOOKS.length;
  document.getElementById("noteCount").textContent = NOTES.length;
  document.getElementById("vaultCount").textContent = VAULT_BOOKS.length;

  // Featured cards
  const featured = [...BOOKS, ...NOTES].filter(i => i.featured).slice(0, 6);
  document.getElementById("featuredGrid").innerHTML = featured.map(renderCard).join("");

  // LB preview top 3
  const top3 = [...CONTRIBUTORS].sort((a, b) => b.uploads - a.uploads).slice(0, 3);
  document.getElementById("lbPreview").innerHTML = top3.map((c, i) => {
    const badge = getBadge(c.uploads);
    const cls = i === 0 ? "gold" : i === 1 ? "silver" : "bronze";
    return `<a href="profile.html?id=${c.id}" class="lb-preview-row">
      <span class="lb-preview-rank ${cls}">${i + 1}</span>
      <span class="lb-preview-emoji">${c.emoji || "👤"}</span>
      <span class="lb-preview-name">${c.name}</span>
      <span class="lb-preview-uploads">${c.uploads} uploads</span>
      <span class="lb-preview-badge" style="color:${badge.color}">${badge.label}</span>
    </a>`;
  }).join("");
});

// ── Smart cover renderer ─────────────────────────────────────────
// If cover is an image path (contains . or starts with http) → renders <img>
// If cover is an emoji or short text → renders as text
// Fallback emoji shows if image fails to load
function renderCover(cover, title, fallbackEmoji) {
  fallbackEmoji = fallbackEmoji || "📄";
  const isImage = cover && (cover.startsWith("http") || cover.startsWith("covers/") || cover.match(/\.(jpg|jpeg|png|webp|gif)$/i));

  if (isImage) {
    return `
      <img
        src="${cover}"
        alt="${title}"
        class="card-cover-img"
        loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <span class="card-emoji card-emoji-fallback" style="display:none;">${fallbackEmoji}</span>
    `;
  }
  return `<span class="card-emoji">${cover || fallbackEmoji}</span>`;
}

function renderCard(item) {
  const isNote = !!item.contributor;
  const badge = (item.type || "PDF").replace(/-/g, " ").toUpperCase();
  const sub = item.subject.replace(/-/g, " ");
  const meta = isNote ? (item.contributor || "") : `${item.edition || ""} ${item.year || ""}`.trim();

  return `<div class="card">
    <div class="card-cover">
      ${renderCover(item.cover, item.title, "📄")}
      <span class="card-badge">${badge}</span>
    </div>
    <div class="card-body">
      <div class="card-subject">${sub}</div>
      <h3 class="card-title">${item.title}</h3>
      <div class="card-author">${meta}</div>
      <p class="card-desc">${item.desc}</p>
      <div class="card-footer">
        <span class="card-meta">${item.year || ""}</span>
        <a href="${item.file}" ${item.file.startsWith("http") ? 'target="_blank" rel="noopener"' : "download"} class="card-dl">↓ Download</a>
      </div>
    </div>
  </div>`;
}

window.renderCard = renderCard;
window.renderCover = renderCover;
