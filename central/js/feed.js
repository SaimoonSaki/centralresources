// feed.js — reads feed.json pushed by n8n, renders the news feed
// feed.json lives in the root of your GitHub repo
// n8n pushes a new version every 6 hours automatically

const FEED_URL = "feed.json";

let allArticles = [];
let activeFilter = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  loadFeed();

  // Filter pills
  document.getElementById("feedPills").addEventListener("click", e => {
    if (e.target.classList.contains("pill")) {
      document.querySelectorAll("#feedPills .pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      activeFilter = e.target.dataset.filter;
      render();
    }
  });

  // Search
  document.getElementById("feedSearch").addEventListener("input", e => {
    searchQuery = e.target.value;
    render();
  });
});

async function loadFeed() {
  try {
    // Add cache-busting so browser always gets latest version
    const res = await fetch(FEED_URL + "?t=" + Date.now());

    if (!res.ok) throw new Error("not found");

    const data = await res.json();
    allArticles = data.items || [];

    // Show last updated time
    if (data.lastUpdated) {
      const d = new Date(data.lastUpdated);
      document.getElementById("feedLastUpdated").textContent =
        "Last updated " + timeAgo(d);
    }

    document.getElementById("feedTotalCount").textContent = allArticles.length;
    document.getElementById("feedLoading").style.display = "none";
    document.getElementById("feedGrid").style.display = "grid";
    render();

  } catch (err) {
    // feed.json doesn't exist yet — show the "not connected" state
    document.getElementById("feedLoading").style.display = "none";
    document.getElementById("feedError").style.display = "flex";
    document.getElementById("feedLastUpdated").textContent = "Not connected yet";
    document.getElementById("feedTotalCount").textContent = "0";
  }
}

function render() {
  let items = allArticles;

  if (activeFilter !== "all") {
    if (activeFilter === "Bangladesh") {
      items = items.filter(i =>
        (i.tags || []).some(t => t.toLowerCase().includes("bangladesh") || t.toLowerCase().includes("bd")) ||
        (i.source || "").toLowerCase().includes("bangladesh") ||
        (i.source || "").toLowerCase().includes("daily star") ||
        (i.source || "").toLowerCase().includes("bdjobs")
      );
    } else {
      items = items.filter(i => i.category === activeFilter);
    }
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(i =>
      i.title.toLowerCase().includes(q) ||
      (i.summary || "").toLowerCase().includes(q) ||
      (i.source || "").toLowerCase().includes(q) ||
      (i.tags || []).some(t => t.toLowerCase().includes(q))
    );
  }

  // Sort newest first
  items = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

  const grid = document.getElementById("feedGrid");
  const empty = document.getElementById("feedEmpty");
  const count = document.getElementById("feedCount");

  count.textContent = `${items.length} article${items.length !== 1 ? "s" : ""}`;

  if (items.length === 0) {
    grid.style.display = "none";
    empty.style.display = "flex";
    return;
  }

  empty.style.display = "none";
  grid.style.display = "grid";
  grid.innerHTML = items.map(renderArticleCard).join("");
}

function renderArticleCard(item) {
  const categoryMeta = {
    "News":     { icon: "📰", color: "#7aabe8" },
    "Research": { icon: "🔬", color: "#7ab87a" },
    "Industry": { icon: "🏭", color: "#d4a843" },
    "Jobs":     { icon: "💼", color: "#c05a3a" },
  };

  const meta = categoryMeta[item.category] || { icon: "📡", color: "#9a9080" };
  const isBD = (item.tags || []).some(t =>
    t.toLowerCase().includes("bangladesh") || t.toLowerCase().includes("bd")
  ) || (item.source||"").toLowerCase().includes("daily star") || (item.source||"").toLowerCase().includes("bdjobs");

  const dateStr = item.date ? new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric", month: "short", year: "numeric"
  }) : "";

  return `
    <a href="${item.url}" target="_blank" rel="noopener" class="feed-card">
      <div class="feed-card-top">
        <span class="feed-category-chip" style="color:${meta.color};border-color:${meta.color}20;background:${meta.color}12">
          ${meta.icon} ${item.category || "News"}
        </span>
        ${isBD ? '<span class="feed-bd-chip">🇧🇩 BD</span>' : ""}
        <span class="feed-date">${dateStr}</span>
      </div>

      <h3 class="feed-card-title">${item.title}</h3>
      <p class="feed-card-summary">${item.summary || ""}</p>

      <div class="feed-card-footer">
        <span class="feed-source">${item.source || ""}</span>
        <span class="feed-read-more">Read →</span>
      </div>

      ${item.tags && item.tags.length ? `
        <div class="feed-card-tags">
          ${item.tags.slice(0, 3).map(t => `<span class="tag">#${t}</span>`).join("")}
        </div>
      ` : ""}
    </a>
  `;
}

function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
