const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.action_btn');
const iconClose = document.querySelector('.icon-close');
RegisterLink.addEventListener('click', () => {wrapper.classList.add('active')});
loginLink.addEventListener('click', () => {wrapper.classList.remove('active')});
btnPopup.addEventListener('click', () => {wrapper.classList.add('active-popup')});
iconClose.addEventListener('click', () => {wrapper.classList.remove('active-popup')});
 
 