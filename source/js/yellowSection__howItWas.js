window.addEventListener('load', () => {
	const videoWrapper = document.querySelector('.yellowSection .howItWas .howItWas__videoBlock')
	const preview = document.querySelector('.yellowSection .howItWas .howItWas__preview')
	const btnPlay = document.querySelector('.yellowSection .howItWas .howItWas__play')
	const iframe = document.querySelector('.yellowSection .howItWas .howItWas__videoBlock iframe')

	function play() {
		btnPlay.style.display = 'none'
		preview.style.display = 'none'
		iframe.src = iframe.getAttribute('data-src')
		iframe.style.display = 'block'
		videoWrapper.style.height = '0px'
		videoWrapper.style.paddingBottom = '46.65%'
	}

	btnPlay.addEventListener('click', play)
})