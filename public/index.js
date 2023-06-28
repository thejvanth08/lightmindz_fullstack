const proceCard = document.getElementById("explore-smiley");
const navBar = document.getElementById("nav-bar");
const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");
const getStarted = document.getElementById("get-started");

proceCard.addEventListener("mouseover", () => {
    const smiley = document.getElementById("smiley");
    smiley.classList.remove("fa-face-smile");
    smiley.classList.add("fa-face-smile-wink");
});

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


getStarted.addEventListener("click", () => {
  // confetti.js
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };
  
  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }
  
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  
  fire(0.2, {
    spread: 60,
  });
  
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  setTimeout( () => {
    window.location.assign("login.html");
  }, 1500);

});















// for swiper js
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    
  }); 

// width & height of viewport
const width = window.outerWidth;
const height = window.outerHeight;
console.log(width, height);
