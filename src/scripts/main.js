'use strict';

const burger = document.querySelector('.header__burger');

const burgerNav = document.querySelector('.burger');

burger.addEventListener('click', function() {
  burgerNav.classList.toggle('burger-active');
});

console.dir(document.body.children[0].children[0]);

