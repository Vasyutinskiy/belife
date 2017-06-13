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
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        autoPlay : true,
        stopOnHover : false,
        navigation : false,
        navigationText : ["prev","next"],
        rewindNav : true,
        scrollPerPage : false,
        pagination : true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        baseClass : "owl-carousel",
        theme : "owl-theme",
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",
        autoHeight : false,
        transitionStyle : false,
        addClassActive : true,
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

    //window height resize function
    $(window).on('resize', function(){
        var main_window = $(window).height();
        if(main_window < 800) {
            $("#main_block").css("overflow-y","auto");
        } else {
            $("#main_block").css("overflow-y","hidden");
        }
    });

    //Slicknavjs
    $(function(){
        $('#head_menu').slicknav();
    });

});

