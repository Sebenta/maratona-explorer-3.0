const btn = document.querySelector("#back-to-top");
const allFamily = document.querySelectorAll(".all-family");
const m18 = document.querySelectorAll(".m18");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleTheVisibleItems() {
  m18.forEach((element) => {
    element.classList.toggle("hidden");
  });
  allFamily.forEach((element) => {
    element.classList.toggle("hidden");
  });
}

window.onscroll = () => scrollFunction();
