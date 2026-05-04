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
    joined: "Currently Studying on 4th Semester",
    note: "I used to be an asshole but now I am good guy",
    emoji: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/down_syndrome_bigbead/1800x1200_down_syndrome_bigbead_alt.jpg?resize=750px:*&output-quality=75",
  },
  {
    id: "contributor-1",
    name: "Sample Contributor",
    role: "Notes Contributor",
    uploads: 5,
    subjects: ["Heat Transfer", "Mass Transfer"],
    joined: "2024-03",
    note: "Typed up the cleanest heat transfer notes I've ever seen.",
    emoji: "🔥",
  },
  {
    id: "contributor-2",
    name: "Another Legend",
    role: "Notes Contributor",
    uploads: 3,
    subjects: ["Process Control"],
    joined: "2024-05",
    note: "Process control explained like a human being.",
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
