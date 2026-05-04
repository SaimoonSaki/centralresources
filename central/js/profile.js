// profile.js — Central Resources
// Fixed: note cover images now render properly
// Fixed: contributor photo is large and prominent

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

  document.title = contributor.name + " — Central Resources";
  document.getElementById("profileNotFound").style.display = "none";
  document.getElementById("profilePage").style.display = "block";

  // PHOTO — loads images/{id}.jpg automatically, falls back to emoji
  const photoEl = document.getElementById("profilePhoto");
  const fallbackEl = document.getElementById("profilePhotoFallback");
  photoEl.src = "images/" + contributor.id + ".jpg";
  photoEl.alt = contributor.name;
  photoEl.onload = function() {
    photoEl.style.display = "block";
    fallbackEl.style.display = "none";
  };
  photoEl.onerror = function() {
    photoEl.style.display = "none";
    fallbackEl.style.display = "flex";
    fallbackEl.textContent = contributor.emoji || "👤";
  };

  // Rank badge
  const rb = document.getElementById("profileRankBadge");
  rb.textContent = "#" + rank;
  rb.style.background = badge.color;
  rb.style.color = "#0b0b08";

  // BG rank
  const bgRank = document.getElementById("profileBgRank");
  if (bgRank) {
    bgRank.textContent = "#" + rank;
    bgRank.style.webkitTextStrokeColor = badge.color;
  }

  // Hero text
  document.getElementById("profileRole").textContent = "// " + contributor.role;
  document.getElementById("profileName").textContent = contributor.name;
  document.getElementById("profileJoined").textContent = "Member since " + formatJoined(contributor.joined);

  const subjectsEl = document.getElementById("profileSubjects");
  if (contributor.subjects && contributor.subjects.length) {
    subjectsEl.innerHTML = contributor.subjects
      .map(s => '<span class="profile-subject-pill">' + s + '</span>').join("");
  }

  // Stats
  document.getElementById("statUploads").textContent = contributor.uploads;
  const sb = document.getElementById("statBadge");
  sb.textContent = badge.label;
  sb.style.color = badge.color;
  document.getElementById("statRank").textContent = "#" + rank;

  // Quote
  if (contributor.note) {
    document.getElementById("profileNoteWrap").style.display = "block";
    document.getElementById("profileNoteText").textContent = '"' + contributor.note + '"';
  }

  // Their uploads with proper cover support
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

  // Other contributors
  const others = CONTRIBUTORS.filter(c => c.id !== id).slice(0, 6);
  document.getElementById("profileOthersGrid").innerHTML = others.map(function(c) {
    const b = getBadge(c.uploads);
    return '<a href="profile.html?id=' + c.id + '" class="profile-other-card">' +
      '<div class="profile-other-avatar">' +
        '<img src="images/' + c.id + '.jpg" alt="' + c.name + '" ' +
          'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
        '<div class="profile-other-fallback" style="display:none;">' + (c.emoji || "👤") + '</div>' +
      '</div>' +
      '<div class="profile-other-name">' + c.name + '</div>' +
      '<div class="profile-other-badge" style="color:' + b.color + '">' + b.label + '</div>' +
      '<div class="profile-other-uploads">' + c.uploads + ' uploads</div>' +
    '</a>';
  }).join("");
});

function renderNoteCard(item) {
  const sub = item.subject.replace(/-/g, " ");
  const isImage = item.cover && (
    item.cover.startsWith("http") ||
    item.cover.startsWith("covers/") ||
    /\.(jpg|jpeg|png|webp|gif)$/i.test(item.cover)
  );
  const coverHtml = isImage
    ? '<img src="' + item.cover + '" alt="' + item.title + '" class="card-cover-img" loading="lazy" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
      '<span class="note-cover-sym" style="display:none;">📝</span>'
    : '<span class="note-cover-sym">' + (item.cover || "📝") + '</span>';

  return '<div class="note-card">' +
    '<div class="note-card-cover">' + coverHtml +
      '<span class="card-badge">' + item.type.toUpperCase() + '</span>' +
    '</div>' +
    '<div class="note-card-body">' +
      '<div class="note-meta-row">' +
        '<span class="card-subject">' + sub + '</span>' +
        '<span class="note-date">' + formatDate(item.date) + '</span>' +
      '</div>' +
      '<h3 class="card-title">' + item.title + '</h3>' +
      '<p class="card-desc">' + item.desc + '</p>' +
      '<div class="note-footer">' +
        '<div class="note-tags">' +
          (item.tags || []).slice(0,3).map(function(t){ return '<span class="tag">#' + t + '</span>'; }).join("") +
        '</div>' +
        '<a href="' + item.file + '" ' +
          (item.file.startsWith("http") ? 'target="_blank" rel="noopener"' : 'download') +
          ' class="card-dl">↓ Download</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function formatDate(str) {
  if (!str) return "";
  return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatJoined(str) {
  if (!str) return "—";
  const parts = str.split("-");
  const year = parts[0], month = parts[1];
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (m[parseInt(month) - 1] || "") + " " + year;
}

function showNotFound() {
  document.getElementById("profileNotFound").style.display = "flex";
  document.getElementById("profilePage").style.display = "none";
}
