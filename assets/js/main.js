// let center = [48.8866527839977, 2.34310679732974];
 
// function init() {
// 	let map = new ymaps.Map('map-test', {
// 		center: center,
// 		zoom: 17
// 	});
 
// }
// ymaps.ready(init);
 
// document.addEventListener('DOMContentLoaded', function () {
// 	new Splide('#new-product', {
// 		perPage: 3,
// 		perMove: 1,
// 		gap: "300px",
// 		pagination: false,
// 	}).mount();
// });
 
 
const swiper = new Swiper(".sliderDiv", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".strelkaNext",
		prevEl: ".strelkaPrev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});
 