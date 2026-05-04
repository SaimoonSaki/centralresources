/**
 * ================================================================
 *  CENTRAL RESOURCES — LEADERBOARD DATA
 * ================================================================
 *  Add contributors here. Auto-sorted by uploads (highest first).
 *
 *  BADGE SYSTEM (auto-assigned):
 *  1       → Newcomer
 *  2–4     → Rising
 *  5–9     → Senior
 *  10–19   → Elite
 *  20+     → GOAT 🐐
 * ================================================================
 */

const CONTRIBUTORS = [
  {
    id: "Adib",
    name: "Shahriar Alom Adib",                    // ← replace with your name
    role: "2023332019, CEP-31",
    uploads: 1,
    subjects: ["Class Rank 5th", "Leading Contributor"],
    joined: "1st Semester",
    note: "I used to be an asshole but now I am good guy",
    emoji: "dick",
  },
  {
    id: "Jubail",
    name: "Md. Jubail Miah",
    role: "2023332024, CEP-31",
    uploads: 3,
    subjects: ["Math King", "Top 3"],
    joined: "1st Semester",
    note: "Math notes are finest",
    emoji: "🐐",
  },
  {
    id: "Rafia",
    name: "Rafia Farjana",
    role: "2023332051, CEP-51",
    uploads: 5,
    subjects: ["3rd CR, Consistent Note Provider"],
    joined: "1st Semester",
    note: "The consistency on giving notes is appreciable",
    emoji: "⚙️",
  },
  // ── ADD CONTRIBUTORS BELOW ────────────────────────────────────
  // {
  //   id: "unique-id",
  //   name: "Their Name",
  //   role: "Notes Contributor",
  //   uploads: 1,
  //   subjects: ["Subject"],
  //   joined: "2025-01",
  //   note: "One sentence about what they contributed.",
  //   emoji: "✨",
  // },
  // ─────────────────────────────────────────────────────────────
];

function getBadge(uploads) {
  if (uploads >= 20) return { label: "GOAT",     color: "#d4a843" };
  if (uploads >= 10) return { label: "Elite",    color: "#e87070" };
  if (uploads >= 5)  return { label: "Senior",   color: "#7ab87a" };
  if (uploads >= 2)  return { label: "Rising",   color: "#7aabe8" };
  return               { label: "Newcomer", color: "#a09070" };
}

window.LEADERBOARD = { CONTRIBUTORS, getBadge };
