const OpenMenu = document.querySelectorAll('[data-modal-target]');

OpenMenu.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    modal.classList.toggle('open');
    button.classList.toggle('clicked');


   if(modal.classList.contains('divs2') || modal.classList.contains('divs3')){
    window.scrollTo(0,document.body.scrollHeight);
   }
   

  });
});



