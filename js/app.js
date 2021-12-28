(function () {
	var prevScrollpos = window.pageYOffset;
	var navbar = document.getElementById('navbar');
	if (prevScrollpos == true) {
		navbar.classList.add('bg-white');
	}
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;

		if (prevScrollpos > currentScrollPos) {
			navbar.style.top = '0';
		} else {
			navbar.style.top = '-90px';
		}
		prevScrollpos = currentScrollPos;
	};
})();
