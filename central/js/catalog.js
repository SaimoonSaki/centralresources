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
    featured: false,
    tags: ["Eco", "Economics", "Roger", "Arnold", "8"]
  },
  {
    id: "advanced-differential-equation",
    title: "Advanced Differential Equation 18e",
    author: "Dr. M.D. RAISINGHANIA",
    subject: "Differential Equation",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/qR0HBRAK#tH016E-lAk78CzkFB9TXXB6qX7hbwrSl2rh5-Ju3FNc",
    cover: "https://m.media-amazon.com/images/I/51wuBNSRHCL._UF1000,1000_QL80_.jpg",
    desc: "Partial Differential Equation questions come from this book typically. Lagrange Charpit Method is to be learned, from chapter 2 and 4",
    featured: false,
    tags: ["differential", "equation", "DE", "calculus", "partial", "integration"]
  },
  {
    id: "differential-equation-shepley",
    title: "Differential Equations 3e",
    author: "Shepley L. Ross",
    subject: "Differential Equation",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/vBNyGSAZ#tJIm0QeuvF15mGm6kCnu9zfgef8WBpQVeySpxKhYUY0",
    cover: "https://pictures.abebooks.com/isbn/9788126515370-uk.jpg",
    desc: "You can learn solving ordinary DE, homogeneous, non-homogenous, solving power series from this book, very versatile",
    featured: true,
    tags: ["differential", "equation", "DE", "calculus", "partial", "integration"]
  },
  {
    id: "differential-equation-shepley-4e",
    title: "Differential Equations 4e",
    author: "Shepley L. Ross",
    subject: "Differential Equation",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/vYV2zLTZ#WUuLuBNhQ4hFfHlr_cRov3xez0mw4kSK1WAYOb4jbXk",
    cover: "https://imgv2-2-f.scribdassets.com/img/document/359330153/298x396/80065f8974/1702726263?v=1",
    desc: "You can learn solving ordinary DE, homogeneous, non-homogenous, solving power series from this book, very versatile",
    featured: false,
    tags: ["differential", "equation", "DE", "calculus", "partial", "integration"]
  },
  {
    id: "differential-equation-shepley-4e-solve",
    title: "Differential Equations Solution 4e",
    author: "Shepley L. Ross",
    subject: "Differential Equation",
    type: "Solution",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/bMMRGDaZ#o5oTWmmC369PDQQCcA6DAm2-8E9wI7NyxREHBPi8_6I",
    cover: "https://media.wiley.com/product_data/coverImage300/17/04710988/0471098817.jpg",
    desc: "solution book, but I'd suggest using claude to solve math, it's far better!(advertised by Saki)",
    featured: false,
    tags: ["differential", "equation", "DE", "calculus", "partial", "integration"]
  },
  {
    id: "Schaum's-Outline-of-Laplace-Transforms",
    title: "Schaum's Outline of Laplace Transforms",
    author: "Murray R. Spiegel",
    subject: "Differential Equation",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/GF1HVQAY#qFsXFkNyBTbybQk_5JwXzaYnT8qST6mbWczAdC_D4bQ",
    cover: "https://m.media-amazon.com/images/I/61ZjRobDGUL._AC_UF350,350_QL50_.jpg",
    desc: "here you will find laplace transforms and fourier as well, fourier is not taught that deeply, you can learn from anywhere",
    featured: false,
    tags: ["differential", "equation", "DE", "calculus", "partial", "integration", "laplace", "fourier", "series"]
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
    featured: false,
    tags: ["development", "Eco", "Economics", "economics"]
  },
  {
    id: "engineering-mechanics-beer-10e",
    title: "Vector Mechanics for Engineers 10e",
    author: "Beer, Johnston, Mazurek, Cornwell",
    subject: "Engineering Mechanics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/eYkSDBoQ#iwAT1GizqG0IIe1g0vQ4edA-jQBPtOAzkQ1hdS-uAOE",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1443783262i/26851484.jpg",
    desc: "Course teacher will mark you specific math, and except for 9,10 chapters, you gotta learn from 1-14th chapter :)) yep, you heard right.",
    featured: true,
    tags: ["engineering mechanics", "EM", "vector", "beer", "static"]
  },
  {
    id: "engineering-mechanics-beer-10e-static-solve",
    title: "Vector Mechanics: Statics Solution Manual",
    author: "Beer, Johnston, Mazurek, Cornwell",
    subject: "Engineering Mechanics",
    type: "Solution",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/eQ8VCZ7a#uRsC5D90XFD64sRCaBZj7hbN854_1hXf-x3Rn-BYh7I",
    cover: "https://s2.studylib.net/store/data/027174262_1-f32531d016aab92cbf1059b61f7c7bad.png",
    desc: "Solution till Chapter 10 is in here, but very lame solution",
    featured: false,
    tags: ["engineering mechanics", "EM", "vector", "beer", "static"]
  },
  {
   id: "engineering-mechanics-beer-10e-vector-solve",
    title: "Vector Mechanics: Vector Solution Manual",
    author: "Beer, Johnston, Mazurek, Cornwell",
    subject: "Engineering Mechanics",
    type: "Solution",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/3Yc3AAwR#uE44mKgc_EJM-M23OAY2JH2e9Jc2JoKt4rvCkH5XZMM",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKd-SDmX_IrFvbDBYQvRJO354oXgigw8buw&s",
    desc: "Solution from Chapter 11 to 14 is in here, but very lame solution",
    featured: false,
    tags: ["engineering mechanics", "EM", "vector", "beer", "static"]
  },
  {
    id: "fluid-bansal",
    title: "A textbook of Fluid Mechanics and Hydraulic Machines",
    author: "R.K. Bansal",
    subject: "Fluid Mechanics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://educationexclusive.com/upload/pdf/A%20Textbook%20of%20Fluid%20Mechanics%20and%20Hydraulic%20Machines%20by%20R.K%20Bansal.pdf",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1430143166i/25437738.jpg",
    desc: "Great book to start from, match the chapters with syllabus's mentioned topics",
    featured: true,
    tags: ["Fluid", "Mechanics", "Bansal", "Pump"]
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
    cover: "https://developingeconomics.org/wp-content/uploads/2021/11/economy-862x796-1.jpg",
    desc: "Course Teacher: Prof. Dr. Muntaha Rakib",
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
