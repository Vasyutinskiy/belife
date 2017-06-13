$(document).ready(function() {
    //carousel settings
    $('#bg-slider').owlCarousel({
        // center: true,
        // lazyLoad: true,
        // autoWidth: true,
        // autoplay: true,
        // slideSpeed: 300,
        // smartSpeed: 1000,
        // nav: false,
        // margin: 0,
        // responsiveRefreshRate: 200,
        // dots: true,
        // loop: true,
        // autoplayHoverPause: true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }

        // Наиболее важные особенности owl
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,
        loop: true,

        //Базовая скорость
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Авто-прокрутка
        autoPlay : true,
        stopOnHover : false,

        // Навигация
        navigation : false,
        navigationText : ["prev","next"],
        rewindNav : true,
        scrollPerPage : false,

        // Пагинация
        pagination : true,
        paginationNumbers: false,

        // Отзывчивость
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        // CSS стили
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        // Авто-высота
        autoHeight : false,


        // // События мышки
        // dragBeforeAnimFinish : true,
        // mouseDrag : true,
        // touchDrag : true,

        //Transitions
        transitionStyle : false,

        // Другое
        addClassActive : true,

        // // Функции обратного вызова
        // beforeUpdate : false,
        // afterUpdate : false,
        // beforeInit: false,
        // afterInit: false,
        // beforeMove: false,
        // afterMove: false,
        // afterAction: false,
        // startDragging : false,
        // afterLazyLoad : false
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 1
        //     },
        //     1000: {
        //         items: 1
        //     }
        // }
    });


    //main dropdown
    $(".product_nav").click(function(){
        $('.product-list').toggleClass('hidden');
    });

    //inner list
    $(".product-list-item").hover(function(){
        $(this).find('.inner_list').toggleClass('hidden');
    });

    //goods list
    $(".inner-list-item").hover(function(){
        $(this).find('.goods_inner_list').toggleClass('hidden');
    });

    // $('li a').click(function() {
    //     if ($(this).hasClass('expanded')) {
    //         $(this).parent().find('ul:first').hide();
    //         $(this).removeClass('expanded');
    //     }
    //     else {
    //         $('#suckertree1 ul').hide();
    //         $(this).parent().find('ul:first').show();
    //         $(this).addClass('expanded');
    //     }
    // });


    // if ($(window).width() < 992) {
    //     $('.weather').click(function(){
    //         $('.weather-popup').toggleClass('side-open');
    //     });
    //     $('.snow').click(function(){
    //         $('.snow-popup').toggleClass('side-open');
    //     });
    // }

    //window height reize function
    $(window).on('resize', function(){
        var main_window = $(window).height();
        if(main_window < 800) {
            $("#main_block").css("overflow-y","auto");
            // $("body").css("overflow-y","auto");
        } else {
            $("#main_block").css("overflow-y","hidden");
        }
    })

    //Responsive nav
    // var nav = responsiveNav(".nav-collapse");

    //Slicknavjs
    $(function(){
        $('#head_menu').slicknav();
    });


    // $(window).resize(function () {
    //     if ($(window).height() < 800) {
    //         $("html").css("overflow-y","hidden");
    //     }
    // });


    //Sticky footer

    // var footerHeight = 0,
    //     footerTop = 0,
    //     $footer = $("#footer");
    //
    // positionFooter();
    //
    // function positionFooter() {
    //
    //     footerHeight = $footer.height();
    //     footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    //
    //     if ( ($(document.body).height()+footerHeight) < $(window).height()) {
    //         $footer.css({
    //             position: "absolute"
    //         }).animate({
    //             top: footerTop
    //         })
    //     } else {
    //         $footer.css({
    //             position: "static"
    //         })
    //     }
    //
    // }
    //
    // $(window)
    //     .scroll(positionFooter)
    //     .resize(positionFooter)

    // $(document).ready(function() {
    //     $('.owl-carousel').owlCarousel({
    //         loop: true,
    //         margin: 10,
    //         responsiveClass: true,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 nav: true
    //             },
    //             600: {
    //                 items: 3,
    //                 nav: false
    //             },
    //             1000: {
    //                 items: 5,
    //                 nav: true,
    //                 loop: false,
    //                 margin: 20
    //             }
    //         }
    //     })
    // })


});

