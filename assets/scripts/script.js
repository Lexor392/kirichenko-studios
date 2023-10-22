$(document).ready(function () {
    var header = $("header");
    var scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 0) {
            header.addClass("header-with-background");
        } else {
            header.removeClass("header-with-background");
        }

        if (scrolled > scrollPrev) {
            // Scrolling down
            header.addClass("header-fixed");
        } else {
            // Scrolling up
            header.removeClass("header-fixed");
        }

        scrollPrev = scrolled;
    });
});

$(document).ready(function () {
    $(document).mousemove(function (e) {
        let xRotation = e.clientY / $(window).height() * -10 + 7.5;
        let yRotation = e.clientX / $(window).width() * 10 - 7.5;
        $('#showreel').css('transform', `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`);
    });

    $('#maindiv').width($('#div1').width());
});
