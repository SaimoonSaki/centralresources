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
    id: "founder",
    name: "Example",                    // ← replace with your name
    role: "Founder & Curator",
    uploads: 12,
    subjects: ["Thermodynamics", "Fluid Mechanics", "Reaction Engineering"],
    joined: "2026-04",
    note: "Isn't it cute?",
    emoji: "https://instagram.fdac198-1.fna.fbcdn.net/v/t51.82787-19/683091109_17887221966500536_4580926789124968733_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDc5LmMyIn0&_nc_ht=instagram.fdac198-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gG6QHjdd30BuD5WmtQ0zRMb0liHbGGaB_Cxx8YyNfS9pZOXymj1hBDnOsxqfZoYJBY&_nc_ohc=XyMdoXzC9ukQ7kNvwFwxl0G&_nc_gid=i_9fa5phA90N7XCngTAQIA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_Af5CFv6nc0jR_ODY15Huv4P8SMhmRMnleI0vOU75zGoCmg&oe=69FBF548&_nc_sid=7d3ac5",
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
