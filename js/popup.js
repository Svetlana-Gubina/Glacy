'use strict';
(function() {
    var submenu = document.querySelector('#submenu');
    var cat = document.querySelector('#cat-link');
    var search = document.querySelector('#search');
    var searchButton = document.querySelector('#search-button');
    var loginLink = document.querySelector('#login');
    var loginForm = document.querySelector('#login-form');
    

    cat.addEventListener('click', function(evt) {
        evt.preventDefault();
        submenu.classList.toggle("visually-hidden");
    });

    searchButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        search.classList.toggle("visually-hidden");
    });

    loginLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        loginForm.classList.toggle("visually-hidden");
    });
})();

