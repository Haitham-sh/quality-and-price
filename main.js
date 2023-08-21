// مصفوفات المنتجات

const ironWorks = {
  abuabH: [
    "img-5 - Copy (6).png",
    "img-6 - Copy (7).png",
    "img-7 - Copy (2).png",
    "img-8 - Copy (8).png",
    "img-2 - Copy (9).png",
    "img-2 - Copy (10).png",
    "img-2 - Copy (11).png",
    "img-2.png",
    "img-2 - Copy (12).png",
    "img-2 - Copy (13).png",
    "img-2 - Copy.png",
    "img-2 - Copy (14).png",
    "img-1 - Copy (15).png",
    "img-2 - Copy (3).png",
    "img-3 - Copy (4).png",
    "img-4 - Copy (5).png",
  ],
  mzalatWswater: [
    "img-4.png",
    "img-4 - Copy.png",
    "img-4 - Copy (2).png",
    "img-4 - Copy (3).png",
    "img-4 - Copy (4).png",
    "img-4 - Copy (5).png",
    "img-4 - Copy (6).png",
    "img-4 - Copy (7).png",
    "img-4 - Copy (8).png",
    "img-4 - Copy (9).png",
    "img-4 - Copy (10).png",
    "img-4 - Copy (11).png",
    "img-4 - Copy (12).png",
    "img-4 - Copy (13).png",
    // "img-4 - Copy (14).png",
    // "img-4 - Copy (15).png",
  ],
  dicoratHaded: [
    "img-9 - Copy (3).png",
    "img-9 - Copy (4).png",
    "img-9 - Copy (5).png",
    "img-9 - Copy (6).png",
    "img-9 - Copy (7).png",
    "img-9 - Copy (8).png",
    "img-9 - Copy (9).png",
    "img-9 - Copy (10).png",
    "img-9 - Copy (11).png",
    "img-9 - Copy.png",
    "img-9 - Copy (12).png",
    "img-9 - Copy (13).png",
    "img-9 - Copy (14).png",
    "img-9.png",
    "img-9 - Copy (15).png",
    "img-9 - Copy (2).png",
  ],
  glsatHaded: [
    "img-3.png",
  ],
  aamalHaded: [
    "img-5.png",
  ]
}

const carpentry = {
  abuabKH: [
    "img-5.png",
  ],
  athath: [
    "img-7.png",
  ],
  dicoratKhshab: [
    "img-6 - Copy (3).png",
    "img-6 - Copy (4).png",
    "img-6 - Copy (5).png",
    "img-6 - Copy (6).png",
    "img-6 - Copy (7).png",
    "img-6 - Copy (8).png",
    "img-6 - Copy (9).png",
    "img-6 - Copy (10).png",
    "img-6 - Copy (11).png",
    "img-6 - Copy.png",
    "img-6 - Copy (12).png",
    "img-6 - Copy (13).png",
    "img-6 - Copy (14).png",
    "img-6.png",
    "img-6 - Copy (15).png",
    "img-6 - Copy (2).png",
  ],
  nahtLezer: [
    "img-7 - Copy (3).png",
    "img-7 - Copy (4).png",
    "img-7 - Copy (5).png",
    "img-7 - Copy (6).png",
    "img-7 - Copy (7).png",
    "img-7 - Copy (8).png",
    "img-7 - Copy (9).png",
    "img-7 - Copy (10).png",
    "img-7 - Copy (11).png",
    "img-7 - Copy.png",
    "img-7 - Copy (12).png",
    "img-7 - Copy (13).png",
    "img-7 - Copy (14).png",
    "img-7.png",
    "img-7 - Copy (15).png",
    "img-7 - Copy (2).png",
  ]
}

const aluminum = {
  klaiang: [
    "img-8 - Copy (3).png",
    "img-8 - Copy (4).png",
    "img-8 - Copy (5).png",
    "img-8 - Copy (6).png",
    "img-8 - Copy (7).png",
    "img-8 - Copy (8).png",
    "img-8 - Copy (9).png",
    "img-8 - Copy (10).png",
    "img-8 - Copy (11).png",
    "img-8 - Copy.png",
    "img-8 - Copy (12).png",
    "img-8 - Copy (13).png",
    "img-8 - Copy (14).png",
    "img-8.png",
    "img-8 - Copy (15).png",
    "img-8 - Copy (2).png",
  ],
  maluminum: [
    "img-7.png",
  ],
  sag: [
    "img-3.png",
  ],
  khashab: [
    "img-1 - Copy (3).png",
    "img-1 - Copy (4).png",
    "img-1 - Copy (5).png",
    "img-1 - Copy (6).png",
    "img-1 - Copy (7).png",
    "img-1 - Copy (8).png",
    "img-1 - Copy (9).png",
    "img-1 - Copy (10).png",
    "img-1 - Copy (11).png",
    "img-1 - Copy.png",
    "img-1 - Copy (12).png",
    "img-1 - Copy (13).png",
    "img-1 - Copy (14).png",
    "img-1.png",
    "img-1 - Copy (15).png",
    "img-1 - Copy (2).png",
  ]
}








// ##############################################################################3



// slid in home
function loadHome() {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
      center: true,
      loop: true,
      nav: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1.35,
          nav: false,
          dots: false
        },
        767: {
          items: 2.5,
          nav: false,
          dots: false
        },
        991: {
          items: 3,
          nav: false,
        }
      }
    });
  });
}


// change group of bottom slider
const groups = document.getElementsByClassName("group")
const leftArrow = document.getElementById("backImages")
const rightArrow = document.getElementById("nextImages")

function nextGroup() {
  if (groups[0].style.display === "") {
    groups[0].style.display = "none"
    groups[1].style.display = ""
    leftArrow.style.color = "#535151"
  } else if (groups[1].style.display === "") {
    groups[1].style.display = "none"
    groups[2].style.display = ""
    rightArrow.style.color = "#bfbfbf"
  }
}

function prevGroup() {
  rightArrow.style.color = "#535151"
  if (groups[2].style.display === "") {
    groups[2].style.display = "none"
    groups[1].style.display = ""
    rightArrow.style.color = "#535151"
  } else if (groups[1].style.display === "") {
    groups[1].style.display = "none"
    groups[0].style.display = ""
    leftArrow.style.color = "#bfbfbf"
  }
}

function openOurNew(src) {
  let theImgTag = document.createElement("img")
  theImgTag.src = `./imgs/groups/${src.split("/").slice(-1)}`
  document.getElementById("theFULL").appendChild(theImgTag)
  document.getElementById("mask").style.display = "block"
  document.getElementById("close").style.display = "block"
}

// start department

let startImage = 0
let lastImage = 8

let updateImages = [
  ...ironWorks.abuabH,
  ...ironWorks.mzalatWswater,
  ...ironWorks.dicoratHaded,
  ...ironWorks.glsatHaded,
  ...ironWorks.aamalHaded,
]

updateImages.sort()

function updatingGallery(updateImages, startImage, lastImage) {
  const containerGallery = document.getElementsByClassName("images-gallery")[0]
  containerGallery.innerHTML = ""
  if (lastImage > updateImages.length) {
    lastImage = updateImages.length

    document.getElementById("rightBtn").disabled = true
    document.getElementById("arrowRight").style.color = "#bfbfbf"
  }
  for (let i = startImage; i < lastImage; i++) {
    let theImage = document.createElement("img")
    theImage.src = `../imgs/departments/${updateImages[i]}`
    theImage.onclick = function openImage() {
      let theImgTag = document.createElement("img")
      theImgTag.src = `../imgs/departments/${updateImages[i]}`
      document.getElementById("theFULL").appendChild(theImgTag)
      document.getElementById("mask").style.display = "block"
      document.getElementById("close").style.display = "block"
    }
    containerGallery.appendChild(theImage)
  }
}



function loadPage() {
  updatingGallery(updateImages, startImage, lastImage)
}


// choosing the department
const dept = document.getElementsByClassName("prod-img")
const theCategories = document.getElementsByClassName("categories")
const kayAll = document.getElementsByClassName("theAll")
const allCategories = document.getElementsByClassName("category")


function chooseDept(id, theDepartment) {
  for (let i = 0; i < dept.length; i++) {
    dept[i].style.opacity = "0.6"
    dept[i].style.border = "none"
    document.getElementById(id).style.opacity = "1"
    document.getElementById(id).style.border = "#1065c6 1vw solid"
  }

  for (let i = 0; i < allCategories.length; i++) {
    allCategories[i].style.backgroundColor = "#2a2928"
  }

  for (let i = 0; i < kayAll.length; i++) {
    kayAll[i].style.backgroundColor = "#1065c6"
  }

  for (let i = 0; i < theCategories.length; i++) {
    theCategories[i].style.display = "none"
  }

  if (id == "prod-img1") {
    theCategories[2].style.display = "flex"
  } else if (id == "prod-img2") {
    theCategories[1].style.display = "flex"
  } else if (id == "prod-img3") {
    theCategories[0].style.display = "flex"
  }

  startImage = 0
  lastImage = 8

  document.getElementById("leftBtn").disabled = true
  document.getElementById("arrowLeft").style.color = "#bfbfbf"

  document.getElementById("rightBtn").disabled = false
  document.getElementById("arrowRight").style.color = "#535151"

  if (theDepartment == ironWorks) {
    updateImages = [
      ...ironWorks.abuabH,
      ...ironWorks.mzalatWswater,
      ...ironWorks.dicoratHaded,
      ...ironWorks.glsatHaded,
      ...ironWorks.aamalHaded,
    ]
    updateImages.sort()
  } else if (theDepartment == carpentry) {
    updateImages = [
      ...carpentry.abuabKH,
      ...carpentry.athath,
      ...carpentry.dicoratKhshab,
      ...carpentry.nahtLezer,
    ]
    updateImages.sort()
  } else if (theDepartment == aluminum) {
    updateImages = [
      ...aluminum.klaiang,
      ...aluminum.maluminum,
      ...aluminum.sag,
      ...aluminum.khashab,
    ]
    updateImages.sort()
  }

  updatingGallery(updateImages, startImage, lastImage)
}

// choose category
function chooseCategory(id, arr) {
  for (let i = 0; i < allCategories.length; i++) {
    allCategories[i].style.backgroundColor = "#2a2928"
  }
  document.getElementById(id).style.backgroundColor = "#1065c6"
  if (id == "allCatgs1") {
    chooseDept("prod-img3", arr)
  } else if (id == "allCatgs2") {
    chooseDept("prod-img2", arr)
  } else if (id == "allCatgs3") {
    chooseDept("prod-img1", arr)
  } else {
    startImage = 0
    lastImage = 8

    document.getElementById("leftBtn").disabled = true
    document.getElementById("arrowLeft").style.color = "#bfbfbf"

    document.getElementById("rightBtn").disabled = false
    document.getElementById("arrowRight").style.color = "#535151"

    updateImages = arr[id]
    updatingGallery(updateImages, startImage, lastImage);
  }
}

// next and prev
function prevGroup2() {
  document.getElementById("rightBtn").disabled = false
  document.getElementById("arrowRight").style.color = "#535151"
  startImage = startImage - 8
  lastImage = startImage + 8
  if (startImage <= 0) {
    startImage = 0
    document.getElementById("leftBtn").disabled = true
    document.getElementById("arrowLeft").style.color = "#bfbfbf"
  }
  updatingGallery(updateImages, startImage, lastImage)
}

function nextGroup2() {

  document.getElementById("leftBtn").disabled = false
  document.getElementById("arrowLeft").style.color = "#535151"
  startImage = startImage + 8
  lastImage = lastImage + 8
  if (lastImage >= updateImages.length) {
    lastImage = updateImages.length
    document.getElementById("rightBtn").disabled = true
    document.getElementById("arrowRight").style.color = "#bfbfbf"
  }
  updatingGallery(updateImages, startImage, lastImage)
}

// open and close video 
function openVideo() {
  document.getElementById("theFULL").innerHTML = `
  <video controls autoplay>
  <source src="./video/quality-price.mp4" type="video/mp4">
  <source src="../video/quality-price.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
  `
  document.getElementById("mask").style.display = "block"
  document.getElementById("close").style.display = "block"
}

function closeVideo() {
  document.getElementById("theFULL").innerHTML = ""
  document.getElementById("mask").style.display = "none"
  document.getElementById("close").style.display = "none"
}
