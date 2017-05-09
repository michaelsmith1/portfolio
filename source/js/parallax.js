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

