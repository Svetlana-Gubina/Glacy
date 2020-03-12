'use strict';
(function() {
    var body = document.querySelector('body');
    var green = document.querySelector('#btn-1');
    var blue = document.querySelector('#btn-2');
    var pink = document.querySelector('#btn-3');
    var slide1 = document.querySelector('.slide-1');
    var slide2 = document.querySelector('.slide-2');
    var slide3 = document.querySelector('.slide-3');

    green.addEventListener('change', function () {
        body.classList = '';
        body.classList.add('background-green');
        slide1.classList.remove('visually-hidden');
        slide2.classList.add('visually-hidden');
        slide3.classList.add('visually-hidden');
    });

    blue.addEventListener('change', function () {
        body.classList = '';
        body.classList.add('background-blue');
        slide2.classList.remove('visually-hidden');
        slide1.classList.add('visually-hidden');
        slide3.classList.add('visually-hidden');
    });

    pink.addEventListener('change', function () {
        body.classList = '';
        body.classList.add('background-pink');
        slide3.classList.remove('visually-hidden');
        slide1.classList.add('visually-hidden');
        slide2.classList.add('visually-hidden');
    });
})();