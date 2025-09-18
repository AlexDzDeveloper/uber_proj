window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  });

  //Робота із модальним вікном
  const doApplication = document.querySelector(".promo_btn"),
  		overlay = document.querySelector(".overlay");

  doApplication.addEventListener('click', () => {
	console.log('click');
	console.log(overlay);
	overlay.style.visibility = 'visible';
	// overlay.style.position = 'fixed';
  })
})