let header = document.querySelector('.header');
let body = document.querySelector('body');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 180);
});

const checkSelect = (index) => {
    const checkOption = document.querySelectorAll('.check-option')
    checkOption.forEach((element, i) => {
        if(i + 1 === index) {
            element.classList.add('active')
        }
    })
}
const overlayDeliver = document.querySelector('.overlay__deliver')
const overlayDiscount = document.querySelector('.overlay__discount')
const overlaySuccess = document.querySelector('.overlay__success')
const changeDeliver = () => {
    overlayDeliver.classList.add('active')
}
const hideOverlay = () => {
    overlayDeliver.classList.remove('active')
    overlayDiscount.classList.remove('active')
}
const showPopupDiscount = () => {
    overlayDiscount.classList.add('active')
}
const showSuccess = () => {
    overlaySuccess.classList.add('active')
}

function checkEnter(event) {
    if (event.key === "Enter") {
        window.location.href = 'timkiem.html'
    }
}

function search() {
    window.location.href = 'timkiem.html'
}

const toggleMenu = () => {
    const headerMobile = document.querySelector('.header__mobile')
    const menuBar = document.querySelector('.menu__bars')
    const overlay = document.querySelector('.overlay')
    headerMobile.classList.toggle('show')
    menuBar.classList.toggle('show')
    overlay.classList.toggle('show')
}

const hideOverlayMobile = () => {
    const headerMobile = document.querySelector('.header__mobile')
    const menuBar = document.querySelector('.menu__bars')
    const overlay = document.querySelector('.overlay')
    headerMobile.classList.remove('show')
    menuBar.classList.remove('show')
    overlay.classList.remove('show')
}