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

document.addEventListener("DOMContentLoaded", function () {
    class Bubble {
        constructor() {
            this.elems = [
                {
                    el: document.querySelector('.bubble'),
                    factor: 0.8
                },
                {
                    el: document.querySelector('.bubble-out'),
                    factor: 0.4
                }
            ]
            this.holder = document.querySelector('.holder')
            this.duration = 0.6
            this.leaveDuration = 1

            this.addEventListeners()
        }

        addEventListeners() {
            this.holder.addEventListener('mousemove', this.mouseMove.bind(this))
            this.holder.addEventListener('mouseleave', this.mouseLeave.bind(this))
        }

        mouseMove(e) {
            const rawX = e.offsetX
            const rawY = e.offsetY
            const w = this.holder.offsetWidth
            const h = this.holder.offsetHeight
            const halfW = w / 2
            const halfH = h / 2

            this.elems.map((item) => {
                const x = (rawX - halfW) * item.factor
                const y = (rawY - halfH) * item.factor

                TweenMax.to(item.el, this.duration, {
                    x: x,
                    y: y
                })
            })
        }

        mouseLeave() {
            this.elems.map((item) => {
                TweenMax.to(item.el, this.leaveDuration, {
                    x: 0,
                    y: 0
                })
            })
        }
    }

    const bubble = new Bubble()
});
