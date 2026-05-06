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
    id: "Fluid-cengel",
    title: "Fluid Mechanics: Fundamentals and Application 4e",
    author: "Yunus A. Cengel, John M. Cimbala",
    subject: "Fluid Mechanics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://lunyax.wordpress.com/wp-content/uploads/2018/04/fluid-mechanics-fundaments-and-applications.pdf",
    cover: "https://m.media-amazon.com/images/I/81DGL4LOIoL._UF1000,1000_QL80_.jpg",
    desc: "Advanced than previous book, questions come from this book frequently.",
    featured: false,
    tags: ["Fluid", "Mechanics", "Cengel", "Pump"]
  },
  {
    id: "Fluid-ChE",
    title: "Fluid Mechanics for Chemical Engineers",
    author: "Noel De Nevers",
    subject: "Fluid Mechanics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/fJ0V0IrZ#hlMUq8DpE_N8FiN8XDFLPO5ITsnK5OTOaqqlmr75CKs",
    cover: "https://m.media-amazon.com/images/I/41bOZCRBrvL._AC_UF894,1000_QL80_.jpg",
    desc: "Dunno if they even teach this or not, just included in the syllabus",
    featured: false,
    tags: ["Fluid", "Mechanics", "Noel Nevers", "Pump"]
  },
  {
    id: "fluid-eng-application",
    title: "Fluid Mechanics with Engineering Applications",
    author: "Joseph B. Franzini, E. John Finnemore",
    subject: "Fluid Mechanics",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/HMtTVKCa#JQ8s68Ptc45_Pz6s2u-0iG07KZAenrl2so6Kg3B_iMU",
    cover: "https://eboighar-static.s3.ap-southeast-1.amazonaws.com/static/Books/book_16022023-08-09_1691580528.jpg",
    desc: "In the syllabus again",
    featured: false,
    tags: ["Fluid", "Mechanics", "Franzini", "Pump"]
  },
  {
    id: "Fluid-cengel-sol",
    title: "Fluid Mechanics: Fundamentals and Application Solution Manual",
    author: "Yunus A. Cengel, John M. Cimbala",
    subject: "Fluid Mechanics",
    type: "Solution",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/GQVkSCxD#s4rWjyQQd3SQP0BVv875yvkg8d-JQuXh60TDjGp1cys",
    cover: "https://m.media-amazon.com/images/I/81DGL4LOIoL._UF1000,1000_QL80_.jpg",
    desc: "All the solution here, numbers might not sync, as we couldn't identify which edition is this",
    featured: false,
    tags: ["Fluid", "Mechanics", "Cengel", "Pump"]
  },
  {
    id: "Sociology-schaefer",
    title: "Sociology",
    author: "Richard T. Schaefer, Robert P. Lamm",
    subject: "Industrial Sociology",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/6VkzEBBY#sljb3A9czmaHgE8boWaeoIGwpDkeFXHcknxDav8zHqE",
    cover: "https://m.media-amazon.com/images/I/51gD69RdjCL._AC_UF894,1000_QL80_.jpg",
    desc: "Depends on your teacher",
    featured: true,
    tags: ["Sociology", "social", "industrial", "schaefer"]
  },
  {
    id: "Sociology-Work-Industry",
    title: "Sociology, Work and Industry 4e",
    author: "Tony J. Watson",
    subject: "Industrial Sociology",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/uFFDjTJC#Kz6Va8gCmB934chGZdqWBj1BVcnyIP5mlGx360pm6xc",
    cover: "https://m.media-amazon.com/images/I/51hDi6UX6pL._AC_UF1000,1000_QL80_.jpg",
    desc: "Depends on your teacher! again, You don't gotta do the work work work work",
    featured: false,
    tags: ["Sociology", "Work", "industrial", "Tony Watson"]
  },
  {
    id: "Sociology-Narendar",
    title: "Industrial Sociology",
    author: "Narendar Singh",
    subject: "Industrial Sociology",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/OdVX0BYQ#JR_3n_wQGDHGm-tJTw8FvfUZ3pfrlIm5xdTcNYpcq9A",
    cover: "https://www.rawatbooks.com/uploads/bookimages/9781259029363.jpg",
    desc: "Our syllabus is basing on this book, you can see the topics matching",
    featured: true,
    tags: ["Sociology", "Narendar Singh", "industrial"]
  },
  {
    id: "polymer-science-gowariker",
    title: "Polymer Science",
    author: "V.R. Gowariker, N.V. Viswanathan, Jayadev Sreedhar",
    subject: "Principles of Polymerization",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/qIln3TDD#oVg6rtjVs-BPpyBM5-AtCRgv2OllDnGpTnpmFxWZou4",
    cover: "https://archive.org/services/img/polymerscience0000gowa",
    desc: "The book is marked, and only a few chapters are there which you need to learn, also depends on course teacher",
    featured: true,
    tags: ["Polymerization", "polymer", "principles of polymerization", "Gowariker"]
  },
  {
    id: "Textbook-polymer-science",
    title: "Textbook of Polymer Science 3e",
    author: "Fred W. Billmeyer Jr.",
    subject: "Principles of Polymerization",
    type: "book",
    year: "1st Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/iRFTSBTK#3D62VCUv5HqiQGqa-dnDdO_E9GH9p0Jmjk9GtXY3P3A",
    cover: "https://m.media-amazon.com/images/I/81V+iIvEoqL._AC_UF1000,1000_QL80_.jpg",
    desc: "Depends on your course teacher, typically 'polymer science' book covers it all",
    featured: false,
    tags: ["Polymerization", "polymer", "principles of polymerization", "Gowariker"]
  },
  {
    id: "intro-to-chemical-thermo",
    title: "Introduction to Chemical Engineering Thermodynamics 8e",
    author: "J. M. Smith, Van Ness, Abbott",
    subject: "Thermodynamics",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/SEV11YzL#USigKNCsry0OAbBOhUA5XtpQ8uvTSIFVPfc_ghlVN28",
    cover: "https://images.thenile.io/r1000/9781259696527.jpg",
    desc: "source 21-22 batch",
    featured: true,
    tags: ["thermodynamics", "thermo", "4th semester", "JM Smith"]
  },
  {
    id: "intro-to-chemical-thermo-6",
    title: "Introduction to Chemical Engineering Thermodynamics 6e",
    author: "J. M. Smith, Van Ness, Abbott",
    subject: "Thermodynamics",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/WEkQxQJb#MrXypDOcNlp5P5nBkaa7wJaVYkDEBC5hun5LLMGsWcE",
    cover: "https://pictures.abebooks.com/isbn/9780072402964-uk.jpg",
    desc: "sometimes some other editions do better than newer ones",
    featured: false,
    tags: ["thermodynamics", "thermo", "4th semester", "JM Smith","6th edition"]
  },
  {
   id: "intro-to-chemical-thermo-6-solve",
    title: "Introduction to Chemical Engineering Thermodynamics 6e Solution",
    author: "J. M. Smith, Van Ness, Abbott",
    subject: "Thermodynamics",
    type: "Solution",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/KEEQwYyT#mV0QV-29b1d8X-f4C4RpP2L05yxa4j4Oz8-vwGqoZwQ",
    cover: "https://pictures.abebooks.com/isbn/9780072402964-uk.jpg",
    desc: "Solution for 6e",
    featured: false,
    tags: ["thermodynamics", "thermo", "4th semester", "JM Smith","6th edition","Solution"]
    },
    {
    id: "Thermo-engineering-approach",
    title: "Thermodynamics: An Engineering Approach 5e",
    author: "Michael A. Boles, Yunus A Çengel",
    subject: "Thermodynamics",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://abdulkadir.blog.uma.ac.id/wp-content/uploads/sites/445/2019/09/Thermodynamics-an-engineering-approach-5th-edition.pdf",
    cover: "https://m.media-amazon.com/images/I/51tyLMWQObL._AC_UF1000,1000_QL80_.jpg",
    desc: "source 21-22 batch",
    featured: false,
    tags: ["thermo", "thermodynamics", "cengel", "5th edition","4th semester"]
  },
  {
    id: "Thermo-engineering-approach",
    title: "Thermodynamics: An Engineering Approach 9e",
    author: "Michael A. Boles, Yunus A Çengel",
    subject: "Thermodynamics",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://iunajaf.edu.iq/Gradual/Publicationoflectures/uploadsPdf/pdfcoffee.com_engineering-thermodynamics-by-cengel-boles-and-kanoglu-9th-edition-pdf-free.pdf%20-%202023.01.13%20-%2006.32.12pm.pdf",
    cover: "https://images-na.ssl-images-amazon.com/images/P/9353165741.01.LZZZZZZZ.jpg",
    desc: "9th edition is widely used as well",
    featured: false,
    tags: ["thermo", "thermodynamics", "cengel", "9th edition","4th semester"]
  },
  {
    id: "Textbook-thermo-chE",
    title: "A Textbook of Chemical Engineering Thermodynamics 2e",
    author: "K.V. NARAYANAN",
    subject: "Thermodynamics",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://davuniversity.org/images/files/study-material/A_Textbook_ofChemical_Engineering.pdf",
    cover: "https://m.media-amazon.com/images/I/61qvcbLXXjL._AC_UF1000,1000_QL80_.jpg",
    desc: "...",
    featured: false,
    tags: ["chemical engineering", "thermodynamics", "narayanan", "textbook","4th semester"]
  },
  {
    id: "heat-transfer-holman",
    title: "Heat Transfer 10e",
    author: "J.P. Holman",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://coeng.uobaghdad.edu.iq/wp-content/uploads/sites/3/uploads/ammar%20data%202017/lectures/chemistry/clases/%D8%A7%D9%86%D8%AA%D9%82%D8%A7%D9%84%20%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%AB%D8%A7%D9%84%D8%AB%D8%A9/Heat%20Transfer,%20Tenth%20Edition.pdf",
    cover: "https://m.media-amazon.com/images/I/51bkLPqtBSL._AC_UF1000,1000_QL80_.jpg",
    desc: "Depends on your course teacher",
    featured: true,
    tags: ["Heat", "Transfer", "Holman", "4th Semester"]
  },
  {
    id: "heat-transfer-holman-solve",
    title: "Heat Transfer 10e Solution",
    author: "J.P. Holman",
    subject: "Heat Transfer",
    type: "solution",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://mega.nz/file/6JVDVRLQ#L5KueimQ4C9A8vXsgjmfw7RZa074HvMSyy9QWTbEiBc",
    cover: "https://m.media-amazon.com/images/I/51bkLPqtBSL._AC_UF1000,1000_QL80_.jpg",
    desc: "Solve for 10e",
    featured: false,
    tags: ["Heat", "Transfer", "Holman", "4th Semester","solution"]
  },
  {
    id: "heat-transfer-holman",
    title: "Heat Transfer 10e",
    author: "J.P. Holman",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://coeng.uobaghdad.edu.iq/wp-content/uploads/sites/3/uploads/ammar%20data%202017/lectures/chemistry/clases/%D8%A7%D9%86%D8%AA%D9%82%D8%A7%D9%84%20%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%AB%D8%A7%D9%84%D8%AB%D8%A9/Heat%20Transfer,%20Tenth%20Edition.pdf",
    cover: "https://m.media-amazon.com/images/I/51bkLPqtBSL._AC_UF1000,1000_QL80_.jpg",
    desc: "Depends on your course teacher",
    featured: true,
    tags: ["Heat", "Transfer", "Holman", "4th Semester"]
  },
  {
    id: "heat-transfer-cengel",
    title: "Heat Transfer: A Practical Approach",
    author: "Yunus A. Cengel",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "",
    cover: "",
    desc: "Depends on your course teacher",
    featured: false,
    tags: ["Heat", "Transfer", "cengel", "4th Semester"]
  },
  {
    id: "heat-transfer-basic-ozisik",
    title: "Heat Transfer: A Basic Approach",
    author: "M. Necati Ozisik",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "",
    cover: "",
    desc: "Depends on your course teacher",
    featured: false,
    tags: ["Heat", "Transfer", "ozisik", "4th Semester"]
  },
  {
    id: "heat-transfer-textbook",
    title: "A Heat Transfer Textbook 4e",
    author: "J.H. Lienhard V, J.H. Lienhard IV",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "",
    cover: "",
    desc: "Depends on your course teacher",
    featured: false,
    tags: ["Heat", "Transfer", "textbook", "4th Semester"]
  },
  {
    id: "heat-transfer-basic-ozisik",
    title: "Heat Transfer: A Basic Approach",
    author: "M. Necati Ozisik",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "",
    cover: "",
    desc: "Depends on your course teacher",
    featured: false,
    tags: ["Heat", "Transfer", "ozisik", "4th Semester"]
  },
  {
    id: "heat-transfer-basic-ozisik",
    title: "Heat Transfer: A Basic Approach",
    author: "M. Necati Ozisik",
    subject: "Heat Transfer",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "",
    cover: "",
    desc: "Depends on your course teacher",
    featured: false,
    tags: ["Heat", "Transfer", "ozisik", "4th Semester"]
  },
  {
    id: "learning-python",
    title: "Learning Python 4e",
    author: "Mark Lutz",
    subject: "Python Lab",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf",
    cover: "https://img.drz.lazcdn.com/static/bd/p/011d0081d962d2a127d699d9c12aa142.jpg_720x720q80.jpg",
    desc: "First recommended book for the course, also this link is recommended: https://docs.python.org/3/tutorial/index.html",
    featured: true,
    tags: ["Python", "python lab", "learning python", "mark lutz","4th Semester"]
  },
  {
    id: "think-python",
    title: "Think Python 2e",
    author: "Allen B. Downey",
    subject: "Python Lab",
    type: "book",
    year: "2nd Semester",
    edition: "2nd Year",
    file: "https://www.greenteapress.com/thinkpython/thinkpython.pdf",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwIHXnoUvPdPin678_GzfrKTDLUz-KFqwGg&s",
    desc: "Second recommended book. Also this link is recommended: https://docs.python.org/3/tutorial/index.html",
    featured: false,
    tags: ["Python", "python lab", "learning python", "mark lutz","4th Semester"]
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
    title: "Economics Full Class Note(23-24)",
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
    id: "de-class-note-23",
    title: "Differential Equation Full Note(23-24)",
    contributor: "Md. Jubail Miah",
    contributorId: "Jubail",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/XI8iEZDa#xtkkU8rn0RODzhX7lRK4lCsPEVXzMMw8XYi0yqeoTMs",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: true,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "de-qb-solve-19_23",
    title: "Differential Equation QB Solve(19-23)",
    contributor: "Kazi Hasney Noor",
    contributorId: "Noor",
    subject: "Differential Equation",
    type: "AI Powered",
    date: "04/05/2026",
    file: "https://mega.nz/file/jclhzYAT#Y1kGHXtZjqBo03JzpJOWJkgRr4JicLexZBqBrcvT7co",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "AI Used: Claude Pro",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "de-qb-def-23",
    title: "Differential Equation QB Definition and Formulas",
    contributor: "Kazi Hasney Noor",
    contributorId: "Noor",
    subject: "Differential Equation",
    type: "AI Generated",
    date: "04/05/2026",
    file: "https://mega.nz/file/OQUHSTRa#yKwEpvsErWPVFThmuiPA_Pd_imKMGdm4Bu9a3-BPlXE",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "AI Used: Claude Pro",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },  
  {
    id: "fourier-rafia",
    title: "Fourier Full Note",
    contributor: "Rafia Farjana",
    contributorId: "Rafia",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/3IVT0Zra#ufRaUPnkV6z_3AWU95GhapU2dT1CmGbRzLyr8rFvhzQ",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "fourier-last-adib",
    title: "Last Class Lecture(23-24)",
    contributor: "Shahriar Alom Adib",
    contributorId: "Adib",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/CF9AxSKb#ZwGJ9PX9iEqcylBIpxlpxX8jUs0jdPkRuJbgotl6lU8",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "fourier-note-jubail",
    title: "Fourier Class Note (23-24)",
    contributor: "Md. Jubail Miah",
    contributorId: "Jubail",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/6YFExBaL#SC7LWWiTWeyG16zTdONEuzQ31ydPMAeTIrLQHJAtwPc",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "laplace-class-adib",
    title: "Laplace Class Notes Lecture(23-24)",
    contributor: "Shahriar Alom Adib",
    contributorId: "Adib",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "https://mega.nz/file/zc0yBSIa#Y_oPw0Qgilir8KIwjc7z9sChR0DpcmSmaMWBSDiXc-Q",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "fourier-last-adib",
    title: "Last Class Lecture(23-24)",
    contributor: "Shahriar Alom Adib",
    contributorId: "Adib",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
  },
  {
    id: "fourier-last-adib",
    title: "Last Class Lecture(23-24)",
    contributor: "Shahriar Alom Adib",
    contributorId: "Adib",
    subject: "Differential Equation",
    type: "handwritten",
    date: "04/05/2026",
    file: "",
    cover: "https://i.ytimg.com/vi/p_di4Zn4wz4/maxresdefault.jpg",
    desc: "Course Teacher: Dr Shamsun Naher Begum",
    featured: false,
    tags: ["differential", "Fourier", "Partial", "homogenous equation"]
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
