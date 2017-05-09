



// menu-autorized-flip__________________

var AuthorizationButton = (function () {
    var
        authorization = $('.buttonauth__link'),
        cardFlip = $('.usercart__rotate');

    return {
        init: function () {
            authorization.on('click', function (e) {
                e.preventDefault();

                $('#authorizationButton').toggleClass('active-button');
                setTimeout(function () {
                    cardFlip.toggleClass('flip');
                }, 100);
            });
        }
    }
}());
$(function () {
    if ($('#authorizationButton').length) {
        AuthorizationButton.init();
    }
});



