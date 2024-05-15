const navBar = document.getElementById("nav-bar");
const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");



openNavBtn.addEventListener("click", () => {
    // toggle -> remove if present or add if absent
    navBar.classList.toggle("active");
    console.log("hi");
  });
  
  closeNavBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
  
  window.onscroll = () => {
    navBar.classList.remove("active");
  }