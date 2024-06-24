const mobile_nav = document.getElementsByClassName("mobile-menu")[0];
const menu_product = document.getElementsByClassName("menu-products");

function closeIt() {
  gsap.to(".mobile-menu", {
    y: 1,
  });
}

// https://i.pinimg.com/564x/ac/cc/a2/accca2832eac1f7afd4c3b84ccac409d.jpg

function openNav() {
  gsap.to(".mobile-menu", {
    y: 215,
  });
}

const burgerUp = 0;

function moveBurgerUp() {
  gsap.to(".burger", {
    scale: 0.5,
    y: -100,
    opacity: 0.5,
  });
}
function moveBurgerDown() {
  gsap.to(".burger", {
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "bounce.out",
  });
}

gsap.from(".hero-text", {
  y: -1000,

  ease: "power2.out",
  opacity: 0,
  duration: 1.5,
});

gsap.from(".burger", {
  y: -1000,
  scale: 1,
  opacity: 1,
  duration: 2,
  ease: "bounce.out",
});

menu_product[0].style.display = "flex";

function hi() {
  menu_product[1].style.display = "flex";

  gsap.from(menu_product[1], {
    y: -20,
    opacity: 1,
    duration: 1.5,
  });
  menu_product[0].style.display = "none";
  gsap.to(menu_product[0], {
    y: 100,
    opacity: 0,
    duration: 1.5,
  });
}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}
