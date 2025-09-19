// window.addEventListener('DOMContentLoaded', () => {
//   const menu = document.querySelector('.menu'),
//   menuItem = document.querySelectorAll('.menu_item'),
//   hamburger = document.querySelector('.hamburger');

//   hamburger.addEventListener('click', () => {
//       hamburger.classList.toggle('hamburger_active');
//       menu.classList.toggle('menu_active');
//   });

//   menuItem.forEach(item => {
//       item.addEventListener('click', () => {
//           hamburger.classList.toggle('hamburger_active');
//           menu.classList.toggle('menu_active');
//       })
//   });

//   //Робота із модальним вікном
//   const doApplication = document.querySelector(".promo_btn"),
//   		overlay = document.querySelector(".overlay"),
// 		close = document.querySelector(".modal__close"),
// 		consultation = document.querySelector("#consultation"),
// 		thx = document.querySelector("#thanks"),
// 		request = document.querySelector("#request");

//   request.addEventListener('click', () => {
// 	overlay.style.visibility = "visible";
// 	consultation.style.display = "block";
//   })

//   doApplication.addEventListener('click', () => {
// 	// console.log('click');
// 	overlay.style.visibility = "visible";
// 	consultation.style.display = "block";
// 	overlay.style.position = 'fixed';
// 	overlay.style.opacity = '1';
// 	overlay.style.transition = "opacity 0.65s ease, visibility 0.65s ease";
//   });

//   close.addEventListener('click', () => {
// 	// console.log('Close window');
// 	overlay.style.visibility = "hidden";
// 	overlay.style.opacity = "0";
// 	overlay.style.transition = "opacity 0.65s ease, visibility 0.65s ease";
//   });

//   const inputs = consultation.querySelectorAll('input');
//   const isEmpty = Array.from(inputs).every(input => input.value.trim() === '');

//   function closwModal(e) {
// 	  overlay.style.visibility = "hidden";
// 	  overlay.style.opacity = "0";
// 	  consultation.style.display = "none";
// 	  if (e.target === overlay && isEmpty) {
// 		closeModal();
// 	  };
//   }



//   // Перевіряємо, чи клік був саме по overlay, а не по модальному вікну
//   overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) {
// 	  closwModal();
//     }
//   });
// })


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu_item');
  const hamburger = document.querySelector('.hamburger');
  const doApplication = document.querySelector(".promo_btn");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".modal__close");
  const consultation = document.querySelector("#consultation");
  const request = document.querySelector("#request");
  const inputs = consultation.querySelectorAll('input');

  // Меню
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('hamburger_active');
      menu.classList.remove('menu_active');
    });
  });

  // Відкриття модального вікна
  function openModal() {
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlay.style.position = "fixed";
    overlay.style.transition = "opacity 0.65s ease, visibility 0.65s ease";
    consultation.style.display = "block";
  }

  // Закриття модального вікна
  function closeModal() {
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    consultation.style.display = "none";
  }

  doApplication.addEventListener('click', openModal);
  request.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);

  // Закриття по кліку на overlay, якщо поля пусті
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      const isEmpty = Array.from(inputs).every(input => input.value.trim() === '');
      if (isEmpty) {
        closeModal();
      }
    }
  });


});