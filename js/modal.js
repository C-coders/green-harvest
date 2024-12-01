const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  modalBg: document.querySelector('[data-modal-bg]'),
};
document.body.classList.remove('modal-open');

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modalBg.addEventListener('click', handleModalBgClick);

function toggleModal() {
   const isHidden = refs.backdrop.classList.toggle('is-hidden');
  if (isHidden) {
    document.body.classList.remove('modal-open');
  } else {
    document.body.classList.add('modal-open');
  }
}

function handleModalBgClick(event) {
  if (event.target === refs.modalBg) {
    toggleModal();
  }
}
