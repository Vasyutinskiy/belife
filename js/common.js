$(document).ready(function() {
    //carousel settings
    $('#bg-slider').owlCarousel({
        center: true,
        lazyLoad: true,
        autoWidth: true,
        autoplay: true,
        slideSpeed: 300,
        smartSpeed: 1000,
        nav: false,
        margin: 0,
        responsiveRefreshRate: 200,
        dots: true,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
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


    //window height reize function
    $(window).on('load resize', function(){
        var main_window = $(window).height();
        if(main_window < 800) {
            $("#main_block").css("overflow-y","auto");
        } else {

        }
    })


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

