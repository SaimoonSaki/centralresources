// vault.js
const STORAGE_KEY = "goat_vault_access";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem(STORAGE_KEY) === "true") showVault();
  const input = document.getElementById("passkeyInput");
  if (input) input.addEventListener("keydown", e => { if (e.key === "Enter") tryUnlock(); });
});

function tryUnlock() {
  const input = document.getElementById("passkeyInput");
  const error = document.getElementById("vaultError");
  const val = input.value.trim();
  if (val === window.CATALOG.VAULT_PASSKEY) {
    localStorage.setItem(STORAGE_KEY, "true");
    input.value = "";
    showVault();
  } else {
    error.textContent = "Wrong passkey. Ask someone who knows.";
    input.value = "";
    input.focus();
    input.parentElement.classList.add("shake");
    setTimeout(() => input.parentElement.classList.remove("shake"), 500);
  }
}

function lockVault() {
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById("vaultUnlocked").style.display = "none";
  document.getElementById("vaultLocked").style.display = "flex";
}

function showVault() {
  document.getElementById("vaultLocked").style.display = "none";
  document.getElementById("vaultUnlocked").style.display = "block";
  renderVault("all", "");

  document.getElementById("vaultPills").addEventListener("click", e => {
    if (e.target.classList.contains("pill")) {
      document.querySelectorAll("#vaultPills .pill").forEach(p => p.classList.remove("active"));
      e.target.classList.add("active");
      renderVault(e.target.dataset.filter, document.getElementById("vaultSearch").value);
    }
  });
  document.getElementById("vaultSearch").addEventListener("input", e => {
    const active = document.querySelector("#vaultPills .pill.active");
    renderVault(active ? active.dataset.filter : "all", e.target.value);
  });
}

function renderVault(filter, search) {
  let items = window.CATALOG.VAULT_BOOKS;
  if (filter !== "all") items = items.filter(i => i.type === filter || i.subject === filter);
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(i => i.title.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) || (i.tags||[]).some(t=>t.includes(q)));
  }
  document.getElementById("vaultItemCount").textContent = `${items.length} item${items.length!==1?"s":""}`;
  document.getElementById("vaultGrid").innerHTML = items.map(item => `
    <div class="card vault-card">
      <div class="card-cover vault-cover"><span class="card-emoji">${item.cover||"🔐"}</span><span class="card-badge">${item.type.replace(/-/g," ").toUpperCase()}</span><div class="vault-card-shimmer"></div></div>
      <div class="card-body">
        <div class="card-subject">${item.subject.replace(/-/g," ")}</div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-author">${item.contributor||""} · ${item.year||""}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <div class="vault-tags">${(item.tags||[]).slice(0,2).map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
          <a href="${item.file}" download class="card-dl vault-dl">↓ Download</a>
        </div>
      </div>
    </div>`).join("");
  document.getElementById("vaultEmpty").style.display = items.length ? "none" : "flex";
}

window.tryUnlock = tryUnlock;
window.lockVault = lockVault;
