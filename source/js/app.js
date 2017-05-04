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
                $('body').toggleClass('active');
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



//blur_________________________
var blur = (function () {
    var wrap = document.querySelector('.blur__form'),
        bg = document.querySelector('.blur'),
        bgSection = document.querySelector('.aboutme');

    function set() {
        var bgWidth = bgSection.offsetWidth,
            posLeft = -wrap.offsetLeft,
            posTop = -wrap.offsetTop,
            offsetImgTop = bgSection.offsetTop,
            offsetTop = posTop + offsetImgTop;

        bg.style.backgroundSize = bgWidth + 'px ' + 'auto';
        bg.style.backgroundPosition = posLeft + 'px ' + offsetTop + 'px';
    }

    return {
        init: function init() {
            set();

            window.addEventListener('resize', set);
        }
    };
}());

$(function () {
    if ($('#blurid').length) {
        blur.init();
    }

    window.onresize = function () {
        if ($('#blurid').length) {
            blur.init();
        }
    }
});

// menu-autorized__________________

var AuthorizationButton = (function () {
    var
        authorization = $('.buttonauth__link'),
        cardFlip = $('.usercart__rotate'),
        butMnu = $('.buttonauth__link_mnu');

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

// Parallax_________________

var ParallaxMouse = (function () {
    return {
        init: function () {
            var parallaxContainer = document.getElementById('parallax-mouse'),
                layers = parallaxContainer.children;

            window.addEventListener('mousemove', function (e) {
                var
                    pageX = e.pageX,
                    pageY = e.pageY,
                    initialX = (window.innerWidth / 2) - pageX,
                    initialY = (window.innerHeight / 2) - pageY;
                [].slice.call(layers).forEach(function (layer, i) {
                    var
                        divider = i/100,
                        positionX = initialX * divider,
                        positionY = initialY * divider,
                        bottomPosition = (window.innerHeight / 2) * divider,
                        layerStyle = layer.style,
                        transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';
                    layerStyle.transform = transformString;
                    layerStyle.webkitTransform = transformString;
                    layerStyle.oTransform = transformString;
                    layerStyle.msTransform = transformString;
                    layerStyle.bottom = '-' + bottomPosition + 'px';
                })
            });
        }
    }
}());

$(function () {
    if ($('#parallax-mouse').length){
        ParallaxMouse.init();
    }
})