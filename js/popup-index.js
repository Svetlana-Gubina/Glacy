'use strict';
(function() {
    var feedbackLink = document.querySelector('.button-feedback');
    var feedbackForm = document.querySelector('.modal-feedback');
    var overlay = document.querySelector('.modal-overlay');
    var btnClose = document.querySelector('.modal-close');

     // Открытие и закрытие модального окна
     var modalClose = function (modal) {
        modal.classList.add("visually-hidden");
    };
    
    var modalOpen = function (modal) {
        modal.classList.remove("visually-hidden");
    };

    feedbackLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalOpen(feedbackForm);
        modalOpen(overlay);
        feedbackForm.classList.add('modal-open');
    });

    var feedbackClose = function () {
        modalClose(feedbackForm);
        modalClose(overlay);
    };

    btnClose.addEventListener("click", feedbackClose);
    overlay.addEventListener("click", feedbackClose);

    window.addEventListener('keydown', function(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            modalClose(feedbackForm);
            modalClose(overlay);
        }
    });
})();

