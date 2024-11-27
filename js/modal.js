const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  modalBg: document.querySelector('[data-modal-bg]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modalBg.addEventListener('click', handleModalBgClick);

function toggleModal() {
  refs.modalBg.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function handleModalBgClick(event) {
  if (event.target === refs.modalBg) {
    toggleModal();
  }
}
