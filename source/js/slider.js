//slider__works------------

var sliderCont = (function () {
    var Slider = function (container) {
        var nextBtn = container.find('.js-slide-prev-but'),
            prevBtn = container.find('.js-slide-next-but'),
            items = nextBtn.find('.js-slider-item'),
            display = container.find('.js-slider-screen'),
            title = container.find('.js-slider-title'),
            skills = container.find('.js-slider-tehnologyes'),
            link = container.find('.js-slider-site-link'),
            itemsLength = items.length,
            duration = 500,
            flag = true;

        var timeout;

        this.counter = 0;

        var generateMarkups = function () {
            var list = nextBtn.find('.js-slider-list'),
                markups = list.clone();

            prevBtn
                .append(markups)
                .find('.js-slider-item')
                .removeClass('active-thumb')
                .eq($(this).counter + 1)
                .addClass('active-thumb');
        };

        var getDataArrays = function () {
            var dataObject = {
                pics: [],
                title: [],
                skills: [],
                link: []
            };

            $.each(items, function () {
                var $this = $(this);

                dataObject
                    .pics
                    .push($this.data('full'));
                dataObject
                    .title
                    .push($this.data('title'));
                dataObject
                    .skills
                    .push($this.data('skills'));
                dataObject
                    .link
                    .push($this.data('link'));
            });

            return dataObject;
        };

        var slideInLeftBtn = function (slide) {
            var reqItem = items.eq(slide - 1),
                activeItem = items.filter('.active-thumb');

            activeItem
                .stop(true, true)
                .animate({
                    'top': '100%'
                }, duration);

            reqItem
                .stop(true, true)
                .animate({
                    'top': '0%'
                }, duration, function () {
                    $(this)
                        .addClass('active-thumb')
                        .siblings()
                        .removeClass('active-thumb')
                        .css('top', '-100%')
                });

        };

        var slideInRightBtn = function (slide) {
            var items = prevBtn.find('.js-slider-item'),
                activeItem = items.filter('.active-thumb'),
                reqSlide = slide + 1;

            if (reqSlide > itemsLength - 1) {
                reqSlide = 0;
            }

            var reqItem = items.eq(reqSlide);

            activeItem
                .stop(true, true)
                .animate({
                    'top': '-100%'
                }, duration);

            reqItem
                .stop(true, true)
                .animate({
                    'top': '0%'
                }, duration, function () {
                    $(this)
                        .addClass('active-thumb')
                        .siblings()
                        .removeClass('active-thumb')
                        .css('top', '100%')
                });
        };

        var changeMainPicture = function (slide) {
            var image = display.find('.js-slider-screen-img');
            var data = getDataArrays();

            image
                .stop(true, true)
                .fadeOut(duration / 2, function () {
                    image.attr('src', data.pics[slide]);
                    $(this).fadeIn(duration / 2);
                });
        };

        var changeTextData = function (slide) {
            var data = getDataArrays();

            aviatitle.generate(data.title[slide], title, 'ru');

            aviatitle.generate(data.skills[slide], skills, 'en');

            link.attr('href', data.link[slide]);
        };

        this.setDefaults = function () {
            var _that = this,
                data = getDataArrays();

            generateMarkups();

            nextBtn
                .find('.js-slider-item')
                .eq(_that.counter - 1)
                .addClass('active-thumb');

            prevBtn
                .find('.js-slider-item')
                .eq(_that.counter + 1)
                .addClass('active-thumb');

            display
                .find('.js-slider-screen-img')
                .attr('src', data.pics[_that.counter]);

            // // text___info------------
            // changeTextData(_that.counter);

        };

        this.moveSlide = function (direction) {
            var _that = this;

            var directions = {
                next: function () {

                    if (_that.counter < itemsLength - 1) {
                        _that.counter++;
                    } else {
                        _that.counter = 0;
                    }
                },

                prev: function () {
                    if (_that.counter > 0) {
                        _that.counter--;
                    } else {
                        _that.counter = itemsLength - 1;
                    }
                }
            };

            directions[direction]();

            if (flag) {
                flag = false;

                if (typeof timeout != 'undefined') {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(function () {
                    flag = true;
                }, duration + 50);

                slideInLeftBtn(_that.counter);
                slideInRightBtn(_that.counter);
                changeMainPicture(_that.counter);
                changeTextData(_that.counter);
            }
        }
    };
    return {
        init: function () {
            var slider = new Slider($('.works__slider'));
            slider.setDefaults();

            $('.js-slide-prev-but').on('click', function (e) {
                e.preventDefault();
                slider.moveSlide('prev');
            });

            $('.js-slide-next-but').on('click', function (e) {
                e.preventDefault();
                slider.moveSlide('next');
            });
        }
    }
}());
$(function () {
    if ($('#slider').length) {
        sliderCont.init();
    }
});