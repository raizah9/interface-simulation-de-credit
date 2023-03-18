const OpenMenu= document.querySelector('[data-modal-target]');
OpenMenu.addEventListener('click',() => {
    const modal = document.querySelector(OpenMenu.dataset.modalTarget)
    modal.classList.toggle('open')
    OpenMenu.classList.toggle('clicked')
  
});



