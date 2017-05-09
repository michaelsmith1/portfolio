// menu_______________________________________
var Hamburger = (function () {
    var
        hamburger = $('.menu__hamburger__link'),
        navContainer = $('.js-navigation'),
        navContent = $('.main-menu');

    return {
        init: function () {
            hamburger.on('click', function (e) {
                e.preventDefault();

                var _this = $(this);

                _this.toggleClass('on');
                $('body').toggleClass('active-body');
                setTimeout(function () {
                    navContent.toggleClass('active');
                }, 500);
                navContainer.toggleClass('active')
            });
        }
    }
}());

$(function () {
    if ($('#hamburger').length) {
        Hamburger.init();
    }
});

