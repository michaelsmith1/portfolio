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

var ParallaxScroll = (function () {
    return {
        init: function () {
            window.onscroll = function () {
                var parallax = (function () {
                    var
                        bg = document.querySelector('.js-parallax-bg'),
                        title = document.querySelector('.js-parallax-title'),
                        user = document.querySelector('.js-parallax-user');

                    return {
                        move: function (block, windowScroll, strafeAmount) {
                            var
                                strafe = windowScroll/-strafeAmount + '%',
                                style = block.style,
                                transformString = 'translate3d(0,'+ strafe +', 0)'
                            style.top = strafe;
                            style.transform = transformString;
                            style.webkitTransform = transformString;
                        },
                        init: function (wScroll) {
                            this.move(bg, wScroll, 45, 0);
                            this.move(title, wScroll, 15, 50);
                            this.move(user, wScroll, 5, 50);
                        }
                    }
                }());
                var wScroll = window.pageYOffset;
                parallax.init(wScroll);
            };
        }
    }
}());

$(function () {
    if ($('#parallax-mouse').length){
        ParallaxMouse.init();
    }

    if ($('#parallax-Scroll').length) {
        ParallaxScroll.init();
    }
})

// preloader___________

var preloader = (function () {
    var
        preloader = $('.preloader'),
        persentsTotal = 0,
        cardAnimate = $('.usercart');
    var imgPath = $('*').map(function (ind, element) {

        var
            background = $(element).css('background-image'),
            path = '';
        var isImg = $(element).is('img');

        if (background != 'none') {
            path = background.replace('url("', '').replace('")','')
        }

        if (isImg) {
            path = $(element).attr('src')
        }

        if (path) return path;
    });

    var setPersents = function (total, current) {

        var persents = Math.ceil(current / total *100);
        $('.js_percents').text(persents + '%');

        if (persents >= 100) {
            preloader.fadeOut();
            cardAnimate.addClass('active');
        }
    };

    var loadImages = function (images) {
        if (!images.length) preloader.fadeOut();

        images.forEach(function (img, i, images) {
            var fakeImages = $('<img>', {
                attr: {
                    src: img
                }
            });

            fakeImages.on('load error', function () {
                persentsTotal++;
                setPersents(images.length, persentsTotal);
            })
        });

    };

    return {
        init: function () {
            var imgs = imgPath.toArray();
            loadImages(imgs);
        }
    }
}());

$(function () {
    preloader.init();
});