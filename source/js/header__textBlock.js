window.addEventListener('load', () => {
	const bg = document.querySelector('.header .header__bg')
	const textBlock = document.querySelector('.header .header__textBlock')
	// console.log(bg.getBoundingClientRect().height)

	function setMTForTB() {
		textBlock.style.marginTop = `${(bg.getBoundingClientRect().height / 100 * 13) * -1}px`
	}

	setMTForTB()

	window.addEventListener('resize', setMTForTB)
})