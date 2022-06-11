const ul = document.querySelector(".navbar-ul");
const burgerMenu = document.querySelector(".burger-menu");

// For burger menu
burgerMenu.addEventListener(
	"click",
	(event) => {
		ul.classList.toggle("hide-burger-menu");
		event.stopPropagation();
	},
	{ passive: true }
);

window.addEventListener(
	"click",
	() => {
		ul.classList.add("hide-burger-menu");
	},
	{ passive: true }
);
