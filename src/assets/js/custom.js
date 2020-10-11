$(window).load(function () {
    $('.navbar-nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.navbar-toggler').click(function () {
        $('.wrapper').toggleClass('open');
        $('.navbar-collapse').toggleClass('show');
        $(this).toggleClass('collapsed');
    });

    $('.navbar-collapse li a').click(function () {
        $('.wrapper').removeClass('open');
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
    })

    if (window.innerWidth > 767) {
        $('.owl-banner').owlCarousel({
            loop: true,
            nav: true,
            touchDrag: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 5
        });
    }

    if (window.innerWidth < 768) {
        $('.owl-banner').owlCarousel({
            items: 2,
            loop: false,
            center: true,
            nav: true,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });
    }

    //max height each div
    if (window.innerWidth > 767) {
        var h3height = 0;
        $('#our_product aside').each(function () {
            if (h3height < $(this).outerHeight()) {
                h3height = $(this).outerHeight();
            };
        });
        $('#our_product aside').height(h3height);
    }

});