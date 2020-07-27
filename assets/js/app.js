// swiperjs
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: false,
	slidesToScroll: '1',
	// slidesPerView: '2',
	spaceBetween: 30,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth:0,
		modifier: 1,
		slideShadows: false,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	freeMode: true,
	loopedSlides: 4,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		256: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		576: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 1,
			slidesToScroll: '1',
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 2,
			slidesToScroll: '1',
			spaceBetween: 10,
		},
	}
});


new WOW().init();
const scroll = new SmoothScroll('.navbar-nav a[href*="#"]', {
	speed: 500
});