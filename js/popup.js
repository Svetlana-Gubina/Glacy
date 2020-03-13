'use strict';
(function() {
    var submenu = document.querySelector('#submenu');
    var cat = document.querySelector('#cat-link');
    var search = document.querySelector('#search');
    var searchButton = document.querySelector('#search-button');
    var loginLink = document.querySelector('#login');
    var loginForm = document.querySelector('#login-form');
    var feedbackLink = document.querySelector('.button-feedback');
    var feedbackForm = document.querySelector('.modal-feedback');
    var overlay = document.querySelector('.modal-overlay');
    var btnClose = feedbackForm.querySelector('.modal-close');

    // Открытие и закрытие модального окна
    var modalClose = function (modal) {
        modal.classList.add("visually-hidden");
    };
    
    var modalOpen = function (modal) {
        modal.classList.remove("visually-hidden");
    };

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

    feedbackLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalOpen(feedbackForm);
        modalOpen(overlay);
    });

    var feedbackClose = function () {
        modalClose(feedbackForm);
        modalClose(overlay);
    };

    btnClose.addEventListener("click", feedbackClose);
    overlay.addEventListener("click", feedbackClose);
    // document.addEventListener('keydown', function(evt) {
    //     evt.preventDefault();
    //     if (evt.key === 'Escape') {
    //         modalOpen(feedbackForm);
    //         modalOpen(overlay);
    //     }
    // });
})();

