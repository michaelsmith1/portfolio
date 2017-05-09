//Menu__Blog______________
var scrollMenu = (function () {
    var $news = $('.blog__contain__list__link'),
        $item = $('.blog__menu__list__link'),
        $wrapMenu = $('.blog__menu'),
        body = document.body,
        isPositionArticle = [],
        offsetHeight = 200,

        positionArticle = function (element) {
            var len = element.length;
            for (var i = 0; i < len; i++) {
                isPositionArticle[i] = {};
                isPositionArticle[i].top = element
                        .eq(i)
                        .offset()
                        .top - offsetHeight;
                isPositionArticle[i].bottom = isPositionArticle[i].top + element
                        .eq(i)
                        .innerHeight();
            }
        },

        scrollPageFixMenu = function () {
            var scroll = window.pageYOffset;
            if (scroll < $news.offset().top) {
                $wrapMenu.removeClass('fixed');
            } else {
                $wrapMenu.addClass('fixed');
            }
        },

        scrollPage = function () {
            var scroll = window.pageYOffset;
            for (var i = 0; i < isPositionArticle.length; i++) {
                if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
                    $('.blog__menu__list__link_phone')
                        .eq(i)
                        .addClass('link_active')
                        .siblings()
                        .removeClass('link_active');
                    $item
                        .eq(i)
                        .addClass('link_active')
                        .siblings()
                        .removeClass('link_active');
                }
            }
        },

        clickOnMenu = function (e) {
            var index = $(e.target).index();
            var sectionOffset = $news
                .eq(index)
                .offset()
                .top;
            $(document).off('scroll', scrollPage);
            $('body, html').animate({
                'scrollTop': sectionOffset
            }, function () {
                $(e.target)
                    .addClass('link_active')
                    .siblings()
                    .removeClass('link_active');
                $(document).on('scroll', scrollPage);
            });
        },

        addListener = function () {
            $('.blog__menu__list').on('click', clickOnMenu);

            $(document).on('scroll', scrollPage);
            $(document).on('scroll', scrollPageFixMenu);

            $(window).on('load', function (e) {
                positionArticle($news);
            });

            $(window).on('resize', function (e) {
                positionArticle($news);
            });

            $('.blog_phone__menu__js_disk').on('click', function (e) {
                e.preventDefault();
                $(this).parents('.blog__aside_phone').toggleClass('blocked');
            });
        };

    return {
        init: addListener
    }
}());

$(function () {
    if ($('#blog').length) {
        scrollMenu.init();
    }
});

