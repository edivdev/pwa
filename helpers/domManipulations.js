export function changesForOpenPopUp() {
  document.querySelector('body').classList.add('block-scroll')
  document.querySelector('#main-footer').classList.add('hide')
}

export function changesForClosePopUp() {
  document.querySelector('body').classList.remove('block-scroll')
  document.querySelector('#main-footer').classList.remove('hide')
}