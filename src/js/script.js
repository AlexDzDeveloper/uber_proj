window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu_item');
  const hamburger = document.querySelector('.hamburger');
  const doApplication = document.querySelector(".promo_btn");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelectorAll(".modal__close");
  const consultation = document.querySelector("#consultation");
  const request = document.querySelector("#request");
  const inputs = consultation.querySelectorAll('input');
  const submit = overlay.querySelectorAll('.button_submit');
  const thx = document.querySelector('#thanks');
  const feed = overlay.querySelectorAll('.feed-form');
  const call = document.querySelector('#call');
  const subheaderBtn = document.querySelector('.subheader_btn');
  const callInput = call.querySelector('input');

  let activeModalType = null;

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
  function openModal(type) {

	activeModalType = type;

    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlay.style.position = "fixed";
    overlay.style.transition = "opacity 0.65s ease, visibility 0.65s ease";

	if (type === 'consultation') {
		consultation.style.display = "block";
	} else if (type === 'call') {
		call.style.display = "block";
	}
  };

doApplication.addEventListener('click', () => openModal('consultation'));
request.addEventListener('click', () => openModal('consultation'));
subheaderBtn.addEventListener('click', () => openModal('call'));
//   close.addEventListener('click', closeModal);


// Закриття модального вікна
	close.forEach(btn => {
		btn.addEventListener('click', () => {
			closeModal();
		})
	});

	function closeModal() {
	overlay.style.visibility = "hidden";
	overlay.style.opacity = "0";
	consultation.style.display = "none";
	thx.style.display = 'none';
	call.style.display = 'none';
	}

  // Закриття по кліку на overlay, якщо поля пусті
  function overlayClick() {
	overlay.addEventListener('click', (e) => {
		if (e.target === overlay) {
			const isConsultationVisible = consultation.style.display === 'block';
			const isThanksVisible = thx.style.display === 'block';
			const isCallVisible = call.style.display === 'block';

			if (isConsultationVisible) {
				const isEmpty = Array.from(inputs).every(input => input.value.trim() === '');
				if (isEmpty) {
					closeModal();
				}
			}

			if (isThanksVisible) {
				overlay.style.visibility = "hidden";
				overlay.style.opacity = "0";
				thx.style.display = "none";
			}

			if (isCallVisible) {
				const isEmpty = callInput.value === '';
				if(isEmpty) {
					closeModal();
				}
			}
		}
	});
  };

  overlayClick();

  submit.forEach(item => {
	item.addEventListener('click', (e) => {

		// const visibleForm = Array.from(document.querySelectorAll('form')).find(form => {
		// 	return window.getComputedStyle(form).display !== 'none';
		// });

		// if (visibleForm && !visibleForm.checkValidity()) {
		// 	e.preventDefault();
		// 	visibleForm.reportValidity();
		// 	return;
		// }

		const form = activeModalType === 'consultation' ? consultation.querySelector('form') : call.querySelector('form');

		if (form && !form.checkValidity()) {
			e.preventDefault();
			form.reportValidity();
			return;
		}


		e.preventDefault(); //зупиняє стандартне надсилання форми

		const isConsultationVisible = consultation.style.display === 'block';
		const isCallVisible = call.style.display === 'block';

		if (isConsultationVisible) {
			consultation.style.display = 'none';
			thx.style.display = 'block';
			overlayClick();
			inputs.forEach(input => input.value = '');
		} else if (isCallVisible) {
			call.style.display = 'none';
			thx.style.display = 'block';
			overlayClick();
			callInput.value = '';
		}
	});
  })

});