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
    emoji: "https://instagram.fdac24-2.fna.fbcdn.net/v/t51.82787-19/629308264_17848010367682064_4364005542172572528_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjAuYzIifQ&_nc_ht=instagram.fdac24-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gG5oZFAovEZ0iS5ip7c7S_p1H56Cq6C6Q2wZPdwgjba7aj0GtRtvhIZTx8DzfkSjLI&_nc_ohc=cus9T44mLsMQ7kNvwH9EnrP&_nc_gid=jEMNN1L9Y40iyJOV3CbcOA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_Af7TGRr38IF2Ji_9wkVSDbdRwmnAp4rbMHLvk5G3zXXBJg&oe=69FE349D&_nc_sid=7d3ac5",
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
