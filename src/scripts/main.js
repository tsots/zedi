window.onload = function () {
 	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('isActive');
		mobile_menu.classList.toggle('isActive');
	});

	console.log("Iam here")
}
