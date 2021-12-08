(function () {
	window.addEventListener('load', () => {
		var button = document.getElementById('button-addon2');
		button.addEventListener('click', () => {
			Swal.fire({
				imageUrl: '/media/meme.webp',
			});
		});
	});
})();
