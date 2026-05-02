// leaderboard.js
document.addEventListener("DOMContentLoaded", () => {
  const { CONTRIBUTORS, getBadge } = window.LEADERBOARD;
  const sorted = [...CONTRIBUTORS].sort((a, b) => b.uploads - a.uploads);

  renderPodium(sorted.slice(0, 3));

  document.getElementById("lbTable").innerHTML = sorted.map((c, i) => {
    const badge = getBadge(c.uploads);
    const rankCls = i === 0 ? "rank-gold" : i === 1 ? "rank-silver" : i === 2 ? "rank-bronze" : "";
    return `<div class="lb-row ${i < 3 ? "top-row" : ""}">
      <span class="lb-td rank"><span class="rank-num ${rankCls}">${i + 1}</span></span>
      <span class="lb-td name">
        <span class="contributor-emoji">${c.emoji || "👤"}</span>
        <a href="profile.html?id=${c.id}" class="contributor-info contributor-link">
          <span class="contributor-name">${c.name}</span>
          <span class="contributor-role">${c.role}</span>
        </a>
      </span>
      <span class="lb-td uploads">
        <span class="upload-count">${c.uploads}</span>
        <span class="upload-bar-wrap"><span class="upload-bar" style="width:${Math.min(100,(c.uploads/sorted[0].uploads)*100)}%"></span></span>
      </span>
      <span class="lb-td badge"><span class="badge-chip" style="color:${badge.color};border-color:${badge.color}20;background:${badge.color}15">${badge.label}</span></span>
      <span class="lb-td joined">${formatJoined(c.joined)}</span>
    </div>`;
  }).join("");
});

function renderPodium(top) {
  const { getBadge } = window.LEADERBOARD;
  const section = document.getElementById("podiumSection");
  if (!section || top.length === 0) return;

  const order = top.length >= 2 ? [top[1], top[0], top[2]].filter(Boolean) : [top[0]];
  const heights = ["160px", "220px", "130px"];
  const crowns = top.length >= 2 ? ["🥈","🥇","🥉"] : ["🥇"];
  const labels = top.length >= 2 ? ["2nd","1st","3rd"] : ["1st"];

  section.innerHTML = `<div class="podium-wrap">
    ${order.map((c, i) => {
      const realIdx = top.length >= 2 ? [1,0,2][i] : 0;
      const badge = getBadge(c.uploads);
      const isFirst = (top.length >= 2 && i === 1) || top.length < 2;
      return `<div class="podium-slot ${isFirst?"podium-first":""}">
        <a href="profile.html?id=${c.id}" class="podium-card" style="text-decoration:none;color:inherit;">
          <div class="podium-emoji">${c.emoji||"👤"}</div>
          <div class="podium-crown">${crowns[realIdx]}</div>
          <div class="podium-name">${c.name}</div>
          <div class="podium-uploads">${c.uploads} uploads</div>
          <div class="podium-badge" style="color:${badge.color}">${badge.label}</div>
          <div class="podium-note">${c.note||""}</div>
        </a>
        <div class="podium-block" style="height:${heights[i]}">
          <span class="podium-position">${labels[i]}</span>
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

function formatJoined(str) {
  if (!str) return "—";
  const [year, month] = str.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(month)-1]||""} ${year}`;
}
