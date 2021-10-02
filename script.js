// -------------------------------------------------------
// variables

// preloader
const preloader = document.querySelector(".preloader");
const preloaderImg = document.querySelector(".preloader-img");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// header
const header = document.querySelector("header");
const headerLogo = document.querySelector(".header-logo");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// main
const hero = document.querySelector(".hero");

// content
const container = document.querySelector(".container");
const slide = document.querySelector(".slide");
const heroHeading = document.querySelector(".hero-heading-green");
const heroGold = document.querySelector(".hero-gold-bg");
const heroGreen = document.querySelector(".hero-green-bg");
const sliderContainer = document.querySelector(".slider-container");

let activeSlide = 0;

const heroHeadingTexts = ["ecommerce", "retail", "groceries", "food"];

const slideImages = [
	"./images/hero/hero_1.png",
	"./images/hero/hero_2.png",
	"./images/hero/hero_3.png",
	"./images/hero/hero_4.png",
];

// -------------------------------------------------------
// functions

// nav changes color when scrolled at specific height
window.onscroll = function () {
	scrollFunction();
};

const scrollFunction = () => {
	if (
		document.body.scrollTop > header.clientHeight ||
		document.documentElement.scrollTop > header.clientHeight
	) {
		headerLogo.src = "./images/colored_logo.png";
		header.classList.add("scrolled");
	} else {
		headerLogo.src = "./images/logo.png";
		header.classList.remove("scrolled");
	}
};

// hamburger onclick
hamburger.addEventListener("click", () => {
	nav.classList.toggle("cross");
	navList.classList.toggle("display");
});

// close nav bar once a link is pressed
navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => {
		nav.classList.toggle("cross");
		navList.classList.toggle("display");
	});
});

// change hero bg gold & green, image, and text from hero
const setActiveSlide = (num) => {
	setTimeout(() => {
		slide.classList.remove("active");
		heroHeading.classList.remove("active");
	}, 0);

	setTimeout(() => {
		slide.src = slideImages[num];
		slide.style.transition = "1s ease";
		heroHeading.innerHTML = heroHeadingTexts[num];
		heroHeading.style.transition = "1s ease";
	}, 800);

	setTimeout(() => {
		slide.classList.add("active");
		heroHeading.classList.add("active");
		createHeroGold();
		createHeroGreen();
	}, 1000);
};

// change hero bg gold & green, image, and text from hero
const moveSlide = () => {
	if (activeSlide === slideImages.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	setActiveSlide(activeSlide);
};

// create hero bg gold & green w/ animation
const createHeroGold = () => {
	const tag = document.createElement("img");
	tag.src = "./images/gold_bg.png";
	tag.classList.add("hero-gold-bg");
	sliderContainer.appendChild(tag);

	removeHeroBg(tag);
};

const createHeroGreen = () => {
	const tag = document.createElement("img");
	tag.src = "./images/green_bg.png";
	tag.classList.add("hero-green-bg");
	sliderContainer.appendChild(tag);

	removeHeroBg(tag);
};

// remove element after two seconds
const removeHeroBg = (el) => {
	setTimeout(() => {
		el.remove();
	}, 2000);
};

// -------------------------------------------------------
// display preloader logo and progressbar after 1.8 secs
setTimeout(() => {
	progressBar.style.opacity = "1";
	progress.style.opacity = "1";
	preloaderImg.style.opacity = "1";
}, 1800);

// remove preloader after 6 secs
setTimeout(() => {
	preloader.style.opacity = "0";
}, 6000);

// show main content after 6 secs
setTimeout(() => {
	container.style.display = "block";

	// add opacity 1 to hero section data
	slide.classList.add("active");
	heroHeading.classList.add("active");

	// change hero section data every 3.5 secs
	setInterval(moveSlide, 3500);
}, 6000);

// add transition after 7 secs after rendering in the beginning
setTimeout(() => {
	slide.style.transition = "1s ease";
	heroHeading.style.transition = "1s ease";
}, 7100);
