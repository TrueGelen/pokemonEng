
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm'
// import GnativeCarousel from './GnativeCarousel'

window.addEventListener('load', () => {

	Swiper.use([Navigation, Pagination]);

	const firstSlider = new Swiper('.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__swiper-container', {
		loop: false,
		slidesPerView: 1,
		navigation: {
			prevEl: '.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__sliderButtons .firstSlider__btn_left',
			nextEl: '.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__sliderButtons .firstSlider__btn_right',
		},
		pagination: {
			el: '.swiper-pagination_first',
			type: 'bullets'
			// modifierClass: 'swiper-pagination-mod'
		}
	})

	const play = document.querySelector('.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__swiper-container .firstSlider__play')
	const previews = document.querySelectorAll('.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__swiper-container .swiper-wrapper .swiper-slide .firstSlider__preview')
	const videos = document.querySelectorAll('.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__swiper-container .swiper-wrapper .swiper-slide .firstSlider__video iframe')


	function isNode(node) {
		return node && (node.nodeType === 1 || node.nodeType == 11)
	}

	function getPropertyOfElement(element, property) {
		if (isNode(element)) {
			if (element.style[property] === '')
				return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
			else
				return element.style[property]
		}
	}

	function playVideo() {

		if (getPropertyOfElement(previews[firstSlider.activeIndex]), 'display' !== 'none') {
			videos[firstSlider.activeIndex].src = videos[firstSlider.activeIndex].getAttribute('data-src')
			previews[firstSlider.activeIndex].style.display = 'none'
			videos[firstSlider.activeIndex].parentNode.style.display = 'block'
			videos[firstSlider.activeIndex].parentNode.style.height = `${document.querySelector('#firstSlider__itemsContainer').getBoundingClientRect().height}px`
			play.style.display = 'none'
		}
	}

	function doSlide() {
		// console.log('slide', firstSlider.activeIndex, firstSlider.previousIndex)
		if (getPropertyOfElement(previews[firstSlider.activeIndex]), 'display' !== 'none') {
			if (firstSlider.activeIndex > 3) {
				play.style.display = 'none'
				if (firstSlider.previousIndex <= 3) {
					videos[firstSlider.previousIndex].src = ''
					previews[firstSlider.previousIndex].style.display = 'block'
					videos[firstSlider.previousIndex].parentNode.style.display = 'none'
				}
			}
			else {
				if (firstSlider.previousIndex <= 3) {
					videos[firstSlider.previousIndex].src = ''
					previews[firstSlider.previousIndex].style.display = 'block'
					videos[firstSlider.previousIndex].parentNode.style.display = 'none'
				}
				play.style.display = 'block'
			}
		}
	}

	const imgSlides = document.querySelectorAll('.firstSlider .container .firstSlider__wrapperSwiper .firstSlider__swiper-container .swiper-wrapper .firstSlider__imgSlide')

	function setHeightForImgSlides() {
		[...imgSlides].forEach(img => {
			img.style.height = `${previews[0].getBoundingClientRect().height}px`
		})
	}
	setHeightForImgSlides()
	window.addEventListener('resize', setHeightForImgSlides)

	firstSlider.on('slideChange', doSlide)

	play.addEventListener('click', playVideo)



	// slider 2-----------------------------


	const phoneSlider = new Swiper('.phoneSlider .container .phoneSlider__wrapperSwiper .phoneSlider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			prevEl: '.phoneSlider .container .phoneSlider__wrapperSwiper .phoneSlider__sliderButtons .phoneSlider__btn_left',
			nextEl: '.phoneSlider .container .phoneSlider__wrapperSwiper .phoneSlider__sliderButtons .phoneSlider__btn_right',
		},
		pagination: {
			el: '.swiper-pagination_phone',
			type: 'bullets'
		}
	})
})