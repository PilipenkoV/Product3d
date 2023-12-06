// ! ==================== burger-menu ====================

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".navigation").classList.toggle("open")
	})
})

// закрити бургер-меню при кліку поза його межами

document.getElementById("menu").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	//дія при кліку
	document.querySelector(".navigation").classList.remove("open")
});

// ! ==================== swiper - our works ====================

const swiper = new Swiper('.swiper', {

	// ===== Optional parameters =====
	direction: 'horizontal',
	loop: true,
	speed: 1500,
	effect: 'slider', // slider - за замовч., cards, coverflow, flip, fade, cube

	// ===== Pagination =====
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// type: 'fraction',
	},

	// ===== Navigation arrows =====
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// ===== Автоматичне перегортання =====
	// autoplay: {
	// 	delay: 3000,
	// },

});

// ! ==================== swiper - 3d product rendering ==================== 

const samplesgallery = new Swiper('.samplesgallery', {

	// ===== Optional parameters =====
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	effect: 'coverflow', // slider - за замовч., cards, coverflow, flip, fade, cube

	// ===== Pagination =====
	pagination: {
		el: '.my-swiper-pagination',
		type: 'fraction',  // fraction, bullets, progressbar, custom
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				' / ' +
				'<span class="' + totalClass + '"></span>';
		}
	},

	// ===== Navigation arrows =====
	navigation: {
		nextEl: '.my-button-next',
		prevEl: '.my-button-prev',
	},

	// ===== Автоматичне перегортання =====
	// autoplay: {
	// 	delay: 3000,
	// },
});

// ! ==================== 3d package rendering ====================

const samplesgallery2 = new Swiper('.samplesgallery2', {

	// ===== Optional parameters =====
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	effect: 'coverflow', // slider - за замовч., cards, coverflow, flip, fade, cube

	// ===== Pagination =====
	pagination: {
		el: '.my-swiper-pagination2',
		type: 'fraction',  // fraction, bullets, progressbar, custom
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				' / ' +
				'<span class="' + totalClass + '"></span>';
		}
	},

	// ===== Navigation arrows =====
	navigation: {
		nextEl: '.my-button-next2',
		prevEl: '.my-button-prev2',
	},

	// ===== Автоматичне перегортання =====
	// autoplay: {
	// 	delay: 3000,
	// },
});