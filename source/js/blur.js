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

