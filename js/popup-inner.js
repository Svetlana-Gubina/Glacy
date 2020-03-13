'use strict';
(function() {
   var sortLinkPop = document.querySelector('.sort-link-visible');
   var sort = document.querySelector('.sort-hidden');
   var cartLink = document.querySelector('.cart-link');
   var cart = document.querySelector('.modal-cart');

   sortLinkPop.addEventListener('click', function (evt) {
        evt.preventDefault();
        sort.classList.toggle('visually-hidden');
   });

   cartLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    cart.classList.toggle('visually-hidden');
});
})();

