jQuery(document).ready(function($) {

    var win = $(window),
        body = $('body'),
        header = $('header'),
        retina = window.devicePixelRatio > 1,
        headerH = $('.header-inner').outerHeight();

    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }

    function mobileClass() {
        var vpWidth = viewport().width; 
        if ((vpWidth <= 740) && (!body.hasClass('mobile'))) {
            body.addClass('mobile');
        } else if ((vpWidth > 740) && (body.hasClass('mobile'))) {
            body.removeClass('mobile');
        }
    }
    mobileClass();
    win.resize(mobileClass);

    function distributeLinks() {

        var link = $('#main-nav').find('li'),
            linkNr = link.length;

        if (linkNr === 2) {

            link.css({
                'width': '33.3333%'
            });
            link.eq(0).css({
                'margin-right': '16.6665%'
            });
            link.eq(1).css({
                'margin-left': '16.6665%'
            });

        } else if (linkNr === 4) {

            link.css({
                'width': '20%'
            });
            link.eq(1).css({
                'margin-right': '10%'
            });
            link.eq(2).css({
                'margin-left': '10%'
            });

        } else if (linkNr === 6) {
            link.css({
                'width': '14.2856%'
            });
            link.eq(2).css({
                'margin-right': '7.1428%'
            });
            link.eq(3).css({
                'margin-left': '7.1428%'
            });

        } else {
            body.removeClass('centered-logo').addClass('left-logo');
        }
    }

    if (body.is('.centered-logo')) {
        distributeLinks();
    }

    function logoAnimation() {
        var logo = $('#logo a');
        win.scroll(function() {
            var scroll = win.scrollTop();
            if (scroll >= 50 && !body.is('.mobile')) {
                logo.addClass("scrolling");
            } else {
                logo.removeClass("scrolling");
            }
        });
    }

    function bannerRetina() {
        var bannerImg = $('.banner img[data-x2]:not([data-x2=""])');
        imagesLoaded(bannerImg).on('progress', function(instance, image) {
            var width = bannerImg.width();
            bannerImg
                .width(width)
                .attr('src', bannerImg.data('x2'));
        });
    }

    if (retina) {
        body.addClass('retina');
        bannerRetina();
    }

    $("h2.section-title").fitText(0.5, {
        maxFontSize: '90px'
    });

    function fixPortfolioHeight() {
        var sectionPortfolio = $('.portfolio'),
            winH = win.height(),
            winMinusHeader = (winH - headerH);

        sectionPortfolio.each(function() {
            var sectionPortfolioH = $(this).height(),
                portfolioContainer = $(this).find('.portfolio-list'),
                portfolioUl = portfolioContainer.find('ul');

            if (portfolioUl.length && !body.is('.mobile')) {
                imagesLoaded(portfolioUl, function() {
                    var portfolioUlH = portfolioUl.height();
                    if (body.is('.page-template-template-portfolio-php') && (sectionPortfolioH < winMinusHeader)) {
                        portfolioContainer.css({
                            'min-height': winMinusHeader
                        });
                    }
                    portfolioContainer.css({
                        'min-height': portfolioUlH
                    });
                });
            }
        });
    }

    fixPortfolioHeight();
    win.resize(fixPortfolioHeight);
    $(".featured.video").fitVids();

    function lightboxInit() {
        var lightbox = $('.lightbox');

        if (lightbox.length) {
            lightbox.each(function() {
                $(this).magnificPopup({
                    delegate: $('.hidden-gallery a'),
                    type: 'image',
                    gallery: {
                        enabled: true,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%""><span class="icon retroicon-chevron-%dir%"></span></button>'
                    }
                });
            });
        }
    }

    lightboxInit();

    if (body.is('.home')) {

        var imgLoad = imagesLoaded(body);
        imgLoad.on('done', function() {
            $('.loader').addClass('ready');
        });

        var countImages = $('body').find('img').size();
        imgLoad.on('progress', function(instance, image) {
            $(image.img).addClass('loaded');
            var countLoadedImages = $('body').find('img.loaded').size();
            var width = 100 * (countLoadedImages / countImages) + '%';
            $(".landing .counter span").css("width", width);

        });
        $('#main-nav a[href^="#"], #logo a, a.nav-link').on('click', function(e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function() {
                window.location.hash = target;
            });

        });

        let slider = $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            pager: false,
            adaptiveHeight: true,
            prevText: '<span class="retroicon-chevron-left"></span>',
            nextText: '<span class="retroicon-chevron-right"></span>',
            speed: parseInt(retro_home_vars.speed),
            adaptiveHeightSpeed: parseInt(retro_home_vars.speed),
            pause: parseInt(retro_home_vars.pausetime),
            auto: retro_home_vars.autosliding,
            autoHover: retro_home_vars.pausehover
        });

        var portfolio = $('.portfolio');
        portfolio.each(function() {

            $(this).find(".cats [data-slug]").on("click", function(e) {

                var trigger = $(this),
                    slug = trigger.data('slug'),
                    portfolio = trigger.parents('.portfolio'),
                    portfolioList = portfolio.find('.portfolio-list ul'),
                    li = portfolio.find('.portfolio-list ul li'),
                    filters = portfolio.find('.cats li');

                if (portfolio.hasClass("hold"))
                    return
                portfolio.addClass("hold")

                if (trigger.hasClass('active')) {
                    portfolioList
                        .removeClass('fadeInRight animated')
                        .addClass('fadeOutLeft animated')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            portfolioList
                                .removeClass('fadeOutLeft animated').addClass('fadeInRight animated');
                            li
                                .addClass("hidden")
                                .slice(0, parseInt(retro_home_vars.portfolionr))
                                .removeClass('hidden');
                        });
                    trigger.removeClass('active');
                    portfolio.removeClass("hold");

                } else {
                    trigger
                        .addClass('active')
                        .siblings('.active')
                        .removeClass('active');

                    if (!trigger.data("loaded")) {
                        trigger.data("loaded", true)
                        $.ajax({
                                url: retro_home_vars.url,
                                data: {
                                    action: "retro_portfolio_filter",
                                    referer: retro_home_vars.ref,
                                    id: portfolio.data("id"),
                                    slug: slug
                                },
                                dataType: "html",
                                type: "post"
                            })
                            .done(function(result) {

                                $(result)
                                    .filter("li")
                                    .each(function() {
                                        if (!li.filter("#" + this.id).length)
                                            $(this)
                                            .addClass("hidden")
                                            .appendTo(portfolioList);
                                        lightboxInit();
                                    })
                            })
                            .always(function() {
                                portfolio.removeClass("hold");
                                portfolio_filter(portfolioList, portfolioList.children("li"), slug);
                            })

                    } else {
                        portfolio_filter(portfolioList, li, slug);
                        portfolio.removeClass("hold");
                    }
                }
                e.preventDefault();

            });

            function portfolio_filter(portfolioList, li, cat) {
                portfolioList
                    .removeClass('fadeInRight animated')
                    .addClass('fadeOutLeft animated')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        portfolioList
                            .removeClass('fadeOutLeft animated').addClass('fadeInRight animated');
                        li
                            .addClass('hidden')
                            .filter("[data-cat*='" + cat + "']")
                            .slice(0, parseInt(retro_home_vars.portfolionr))
                            .removeClass('hidden');
                    });
            }
        });

    } else if (body.is('.page-template-template-portfolio-php')) {
        var portfolio = $('.portfolio');
        portfolio.each(function() {

            var portfolioList = $(this).find('.portfolio-list ul'),
                li = $(this).find('.portfolio-list ul li'),
                filters = $(this).find('.cats li');

            filters.on('click', function(e) {
                var trigger = $(this);

                if (trigger.hasClass('active')) {
                    portfolioList
                        .removeClass('fadeInRight animated')
                        .addClass('fadeOutLeft animated')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            portfolioList
                                .removeClass('fadeOutLeft animated').addClass('fadeInRight animated');
                            li
                                .filter('.hidden')
                                .removeClass('hidden');
                        });
                    trigger.removeClass('active');

                } else {
                    portfolioList
                        .removeClass('fadeInRight animated')
                        .addClass('fadeOutLeft animated')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            portfolioList
                                .removeClass('fadeOutLeft animated').addClass('fadeInRight animated');
                            li
                                .addClass('hidden')
                                .filter('[data-cat*="' + trigger.data('slug') + '"]')
                                .removeClass('hidden');
                        });
                    trigger
                        .addClass('active')
                        .siblings('.active')
                        .removeClass('active');
                }
                e.preventDefault();
            });
        });
    }
});