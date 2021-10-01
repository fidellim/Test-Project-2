// preloader
const preloader = document.querySelector(".preloader");
const preloaderImg = document.querySelector(".preloader-img");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

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

const setActiveSlide = (num) => {
	setTimeout(() => {
		slide.classList.remove("active");
		heroHeading.classList.remove("active");
	}, 0);

	setTimeout(() => {
		slide.src = slideImages[num];
		slide.style.transition = "1s ease";
		slide.classList.add("active");
		heroHeading.innerHTML = heroHeadingTexts[num];
		heroHeading.style.transition = "1s ease";
		heroHeading.classList.add("active");
		createHeroGold();
		createHeroGreen();
	}, 1000);
};

const moveSlide = () => {
	if (activeSlide === slideImages.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	setActiveSlide(activeSlide);
};

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

const removeHeroBg = (el) => {
	setTimeout(() => {
		el.remove();
	}, 2000);
};

setTimeout(() => {
	progressBar.style.opacity = "1";
	progress.style.opacity = "1";
	preloaderImg.style.opacity = "1";
}, 1800);

setTimeout(() => {
	// main.style.isolation = "isolate";
	preloader.style.opacity = "0";
	// container.style.display = "block";

	// preloader.remove();
}, 6000);

setTimeout(() => {
	container.style.display = "block";
	// add opacity 1 to hero section data
	slide.classList.add("active");
	heroHeading.classList.add("active");
	// change hero section data every 3.5 secs
	setInterval(moveSlide, 3500);
}, 6100);

// add transition after 1 sec after rendering in the beginning
setTimeout(() => {
	slide.style.transition = "1s ease";
	heroHeading.style.transition = "1s ease";
}, 7100);
