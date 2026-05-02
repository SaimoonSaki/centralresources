// profile.js — URL: profile.html?id=founder  |  profile.html?id=rafiq
document.addEventListener("DOMContentLoaded", () => {
  const { CONTRIBUTORS, getBadge } = window.LEADERBOARD;
  const { NOTES } = window.CATALOG;

  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) { showNotFound(); return; }

  const contributor = CONTRIBUTORS.find(c => c.id === id);
  if (!contributor) { showNotFound(); return; }

  const sorted = [...CONTRIBUTORS].sort((a, b) => b.uploads - a.uploads);
  const rank = sorted.findIndex(c => c.id === id) + 1;
  const badge = getBadge(contributor.uploads);

  document.title = contributor.name + " — GOAT Publications";
  document.getElementById("profileNotFound").style.display = "none";
  document.getElementById("profilePage").style.display = "block";

  // Photo — auto-loads from images/{id}.jpg
  document.getElementById("profilePhoto").src = "images/" + contributor.id + ".jpg";
  document.getElementById("profileEmoji").textContent = contributor.emoji || "👤";

  // Rank badge (coloured circle bottom-right of avatar)
  const rb = document.getElementById("profileRankBadge");
  rb.textContent = "#" + rank;
  rb.style.background = badge.color;
  rb.style.color = "#0b0b08";

  // Big background rank number
  const bgRank = document.getElementById("profileBgRank");
  bgRank.textContent = "#" + rank;
  bgRank.style.webkitTextStrokeColor = badge.color;

  // Hero text
  document.getElementById("profileRole").textContent = "// " + contributor.role;
  document.getElementById("profileName").textContent = contributor.name;
  document.getElementById("profileJoined").textContent = "Member since " + formatJoined(contributor.joined);

  const subjectsEl = document.getElementById("profileSubjects");
  if (contributor.subjects && contributor.subjects.length) {
    subjectsEl.innerHTML = contributor.subjects
      .map(s => `<span class="profile-subject-pill">${s}</span>`).join("");
  }

  // Stats
  document.getElementById("statUploads").textContent = contributor.uploads;
  const sb = document.getElementById("statBadge");
  sb.textContent = badge.label;
  sb.style.color = badge.color;
  document.getElementById("statRank").textContent = "#" + rank;

  // Their note/quote
  if (contributor.note) {
    document.getElementById("profileNoteWrap").style.display = "block";
    document.getElementById("profileNoteText").textContent = '"' + contributor.note + '"';
  }

  // Their uploads from NOTES
  const theirNotes = NOTES.filter(n => n.contributorId === id);
  const grid = document.getElementById("profileNotesGrid");
  const emptyEl = document.getElementById("profileEmpty");
  document.getElementById("profileUploadsTitle").textContent =
    contributor.name.split(" ")[0] + "'s Uploads";

  if (theirNotes.length === 0) {
    grid.style.display = "none";
    emptyEl.style.display = "flex";
  } else {
    emptyEl.style.display = "none";
    grid.innerHTML = theirNotes.map(renderNoteCard).join("");
  }

  // Other contributors grid
  const others = CONTRIBUTORS.filter(c => c.id !== id).slice(0, 6);
  document.getElementById("profileOthersGrid").innerHTML = others.map(c => {
    const b = getBadge(c.uploads);
    return `<a href="profile.html?id=${c.id}" class="profile-other-card">
      <div class="profile-other-avatar">
        <img src="images/${c.id}.jpg" alt="${c.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="profile-other-fallback" style="display:none;">${c.emoji||"👤"}</div>
      </div>
      <div class="profile-other-name">${c.name}</div>
      <div class="profile-other-badge" style="color:${b.color}">${b.label}</div>
      <div class="profile-other-uploads">${c.uploads} uploads</div>
    </a>`;
  }).join("");
});

function renderNoteCard(item) {
  const sub = item.subject.replace(/-/g, " ");
  return `<div class="note-card">
    <div class="note-card-cover">
      <span class="note-cover-sym">${item.cover||"📝"}</span>
      <span class="card-badge">${item.type.toUpperCase()}</span>
    </div>
    <div class="note-card-body">
      <div class="note-meta-row">
        <span class="card-subject">${sub}</span>
        <span class="note-date">${formatDate(item.date)}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
      <div class="note-footer">
        <div class="note-tags">${(item.tags||[]).slice(0,3).map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
        <a href="${item.file}" download class="card-dl">↓ Download</a>
      </div>
    </div>
  </div>`;
}

function formatDate(str) {
  if (!str) return "";
  return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatJoined(str) {
  if (!str) return "—";
  const [year, month] = str.split("-");
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (m[parseInt(month)-1]||"") + " " + year;
}

function showNotFound() {
  document.getElementById("profileNotFound").style.display = "flex";
  document.getElementById("profilePage").style.display = "none";
}
