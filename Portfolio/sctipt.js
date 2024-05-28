var sidenav = document.getElementById("side-nav");
var cancelbtn = document.getElementById("cancel");

cancelbtn.addEventListener("click", function () {
  sidenav.style.left = "-700px";
});

function show() {
  sidenav.style.left = 0;
}

function download() {
  window.open("ManojResume.pdf", "_blank");
}
document.addEventListener("DOMContentLoaded", (event) => {
  function scrollToElement(elementSelector) {
    const element = document.querySelector(elementSelector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const link1 = document.querySelector(".link1 a");
  const link2 = document.querySelector(".link2 a");
  const link3 = document.querySelector(".link3 a");
  const link4 = document.querySelector(".link4 a");
  const link5 = document.querySelector(".link5 a");
  const link6 = document.querySelector(".link6 a");

  if (link1) {
    link1.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".skills");
    });
  }

  if (link2) {
    link2.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".project .header");
    });
  }

  if (link3) {
    link3.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".contact-container");
    });
  }
  if (link4) {
    link4.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".skill-set");
    });
  }
  if (link5) {
    link5.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".project .header");
    });
  }
  if (link6) {
    link6.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToElement(".contact-container");
    });
  }
});