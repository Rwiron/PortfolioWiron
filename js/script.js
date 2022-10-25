//  cool animation typing
var typed = new Typed(".typing", {
  strings: [
    " ",
    "Software Developer",
    "Mobile Developer",
    "Web Developer",
    "Web Designer",
    "Game Developer",
    "IoT engineer",
    "Graphic Designer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      sideSectionTogglerBtn();
    }
  });
}

function showSection(element) 
{
  for (let i = 0; i<totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  side = document.querySelector(".side");
navTogglerBtn.addEventListener("click", () => {
  sideSectionTogglerBtn();
});
function sideSectionTogglerBtn() {
  side.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
