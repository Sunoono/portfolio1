// JavaScript Document
// JavaScript Document
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
 
btn.addEventListener('click', function(){
  nav.classList.toggle('open-menu');


  if (btn.innerHTML === 'Menu') {
   btn.innerHTML = 'Close';
    } else {
    btn.innerHTML = 'Menu';
  }
});



 