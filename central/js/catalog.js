/**
 * ================================================================
 *  CENTRAL RESOURCES — CONTENT CATALOG
 * ================================================================
 *  This is your entire CMS. Edit to add books, notes, vault items.
 *
 *  COVER IMAGE — 3 ways to set it:
 *
 *  1. EMOJI (simplest):
 *     cover: "🔥"
 *
 *  2. YOUR OWN IMAGE (upload to /covers/ folder on GitHub):
 *     cover: "covers/smith-thermo.jpg"
 *
 *  3. OPEN LIBRARY (free, no upload needed — just find ISBN):
 *     cover: "https://covers.openlibrary.org/b/isbn/YOUR_ISBN-L.jpg"
 *     Example: "https://covers.openlibrary.org/b/isbn/9780073529264-L.jpg"
 *     Find ISBN: google the book name + "ISBN"
 *
 *  HOW TO ADD A BOOK:
 *  1. Upload PDF to /books/ folder on GitHub
 *  2. Add entry to BOOKS array below
 *  3. Push → Netlify deploys. Done.
 *
 *  SUBJECTS: thermodynamics | fluid-mechanics | heat-transfer |
 *            mass-transfer | reaction-engineering | process-control |
 *            transport-phenomena | process-design | instrumentation |
 *            environmental | biochemical | polymer | mathematics |
 *            chemistry | other
 * ================================================================
 */

const BOOKS = [
  {
    id: "economics-roger",
    title: "Economics 13e",
    author: "Roger A. Arnold",
    subject: "Economics",
    type: "book",
    year: "2nd Year",
    edition: "13rd Edition",
    file: "https://mega.nz/file/Lc0iyQQI#ZVZCNaOARveEBEkI3Ylkf9B5B5ZlPh_5uRo028QMz_U",
    cover: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&productISBN13=9781337617383",
    desc: "Marco and Microeconomics to be learned from this book. GDP, GNP, Unemployment Parts will be needed to be learned from sheets or any other sources ma'am provides",
    featured: true,
    tags: ["Eco", "Economics", "Roger", "Arnold", "13"]
  },
  {
    id: "economics-roger",
    title: "Economics 8e",
    author: "Roger A. Arnold",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/CN1kGK4I#XbiXwwuJERHG8mBRAu4PwYlw2lzoccIS3hHziH_d9p8",
    cover: "https://books.google.com.vc/books/content?id=9-wGxBXFKNIC&printsec=frontcover&img=1&zoom=5",
    desc: "GDP GNP Unemployment is much more decorated here, read these topics from here",
    featured: true,
    tags: ["Eco", "Economics", "Roger", "Arnold", "13"]
  },
  {
    id: "economic-development-todaro",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Distinction between Development and growth, how to have development, SDGs, types of development, and then poverty measurements, types of poverties",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "Economic Development 12th Edition",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Clear, comprehensive intro to fluid mechanics. Great for both theory and practical application.",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "Economic Development 12th Edition",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Clear, comprehensive intro to fluid mechanics. Great for both theory and practical application.",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "Economic Development 12th Edition",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Clear, comprehensive intro to fluid mechanics. Great for both theory and practical application.",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "Economic Development 12th Edition",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Clear, comprehensive intro to fluid mechanics. Great for both theory and practical application.",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "Economic Development 12th Edition",
    title: "Economic Development 12e",
    author: "Micheal P. Todaro, Stephen C. Smith",
    subject: "Economics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/LElFSYjC#J2kPUj_ZWNU8ch-x91Df_iFvLVJFjPyB_4ZPxS3iYFE",
    cover: "https://www.pearson.com/store/pmccommercewebservices/v2/medias/size-W370-bigcovers-0133406784.jpg?context=bWFzdGVyfGltYWdlc3w5OTA3NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hhNi9oNzQvMTUwNDY5ODIwNzQzOTgvc2l6ZV9XMzcwXy9iaWdjb3ZlcnMvMDEzMzQwNjc4NC5qcGd8OWIzYmVhYmU1Y2FiNDYwNWUyNzcxNGI1MGViYTI1NzViYTIyMDUwNmI1MGU4YTEzNWRiZGQyOTk4YTVmYTI0ZA&imwidth=640",
    desc: "Clear, comprehensive intro to fluid mechanics. Great for both theory and practical application.",
    featured: true,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  // ── ADD YOUR BOOKS BELOW ──────────────────────────────────────
  // {
  //   id: "unique-id",
  //   title: "Book Title",
  //   author: "Author Name",
  //   subject: "thermodynamics",
  //   type: "book",
  //   year: "2020",
  //   edition: "3rd Ed.",
  //   file: "books/your-file.pdf",
  //
  //   // OPTION 1 — emoji:
  //   cover: "📘",
  //
  //   // OPTION 2 — your own image (upload to /covers/ folder):
  //   // cover: "covers/your-image.jpg",
  //
  //   // OPTION 3 — Open Library (replace ISBN with real one):
  //   // cover: "https://covers.openlibrary.org/b/isbn/9780000000000-L.jpg",
  //
  //   desc: "Short description.",
  //   featured: false,
  //   tags: ["tag1", "tag2"]
  // },
  // ─────────────────────────────────────────────────────────────
];

const NOTES = [
  {
    id: "economics-class-notes-adib",
    title: "Economics Class Note(23-24)",
    contributor: "Shahriar Alom Adib",
    contributorId: "Adib",
    subject: "Economics",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/bddTgRRB#YyioMtG5egrsQMxcHAtQoZAWR1HzZJanPU_mbwJDKy0",
    cover: "https://biophysics.princeton.edu/sites/g/files/toruqf2306/files/styles/freeform_750w/public/2024-09/fluid_mechanics_in_living_systems.png?itok=J2wfQcAR",
    desc: "Course teacher was Muntaha Rakib Ma'am of Economics Department. And Shahriar Alom noted these all, he's very attentive",
    featured: true,
    tags: ["economics", "muntaha rakib", "economics"]
  },
  {
    id: "reynolds-number",
    title: "Reynolds Number — What It Actually Means",
    contributor: "Founder",
    contributorId: "founder",
    subject: "fluid-mechanics",
    type: "typed",
    date: "2024-04-02",
    file: "books/note-reynolds.pdf",
    cover: "Re",
    desc: "Not just the formula. What it physically means, when to use it, laminar vs turbulent intuition.",
    featured: true,
    tags: ["reynolds", "turbulent", "laminar", "dimensionless"]
  },
  // ── ADD COMMUNITY NOTES BELOW ─────────────────────────────────
  // {
  //   id: "unique-id",
  //   title: "Note Title",
  //   contributor: "Their Name",
  //   contributorId: "their-id",
  //   subject: "thermodynamics",
  //   type: "handwritten",
  //   date: "2025-01-15",
  //   file: "books/their-note.pdf",
  //   cover: "📝",   // notes use emoji covers mostly, but image works too
  //   desc: "Short description.",
  //   featured: false,
  //   tags: ["tag1", "tag2"]
  // },
  // ─────────────────────────────────────────────────────────────
];

// ── VAULT ────────────────────────────────────────────────────────
//  ⚠️  CHANGE THIS PASSKEY BEFORE DEPLOYING  ⚠️
const VAULT_PASSKEY = "fuckdrive"; // ← CHANGE THIS

const VAULT_BOOKS = [
  {
    id: "vault-senior-thermo",
    title: "Senior Year Thermodynamics — Complete Notes",
    contributor: "Founder",
    subject: "thermodynamics",
    type: "senior-notes",
    year: "2024",
    file: "vault-books/senior-thermo-notes.pdf",
    cover: "🔐",
    desc: "Full senior year thermo notes — phase equilibria, activity coefficients, advanced equations of state.",
    tags: ["senior", "activity coefficients", "EOS", "advanced thermo"]
  },
  // ── ADD VAULT CONTENT BELOW ───────────────────────────────────
];

window.CATALOG = { BOOKS, NOTES, VAULT_BOOKS, VAULT_PASSKEY };
