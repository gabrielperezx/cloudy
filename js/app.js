(function () {
	hideFunction();

	function hideFunction() {
		var prevScrollpos = window.pageYOffset;
		var navbar = document.getElementById('navbar');
		var navigation = document.getElementById('navigation');

		window.onscroll = function () {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				navbar.classList.remove('py-4');

				navigation.classList.add('bg-dark');
			} else {
				navbar.classList.add('py-4');

				navigation.classList.remove('bg-dark');
			}

			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				navigation.style.top = '0';
			} else {
				navigation.style.top = '-60px';
			}
			prevScrollpos = currentScrollPos;
		};
	}
})();
