
// window scroll > 100
$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
                $('#arrowBtn').removeClass('hidden');
        } else {
                $('#arrowBtn').addClass('hidden');
        }
});

// scroll to top
function scrollToTop() {
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
        });
}

// all swiper
var swiper = new Swiper(".testimonialSwiper", {

        slidesPerView: 1,

        spaceBetween: 30,

        loop: true,

        speed: 900,

        autoplay: {

                delay: 5000,

                disableOnInteraction: false,

        },

        pagination: {

                el: ".swiper-pagination",

                clickable: true,

        },

        navigation: {

                nextEl: ".testimonial-next",

                prevEl: ".testimonial-prev",

        },

});
var swiper = new Swiper(".clientSwiper", {

    slidesPerView: 1,

    spaceBetween: 30,

    loop: true,

    autoplay: {

        delay: 4500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".client-next",

        prevEl: ".client-prev",

    },

    breakpoints: {

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        }

    }

});


new Swiper(".courseSwiper", {

        loop: true,

        spaceBetween: 30,

        autoplay: {
                delay: 4000,
        },

        breakpoints: {

                320: {
                        slidesPerView: 1,
                },

                768: {
                        slidesPerView: 2,
                },

                1200: {
                        slidesPerView: 3,
                }

        }

});

new Swiper(".founderSwiper", {

        loop: true,

        speed: 900,

        autoplay: {

                delay: 5000,

                disableOnInteraction: false,

        },

        navigation: {

                nextEl: ".founder-next",

                prevEl: ".founder-prev",

        }

});

new Swiper(".certificateSwiper", {

        slidesPerView: 1,

        spaceBetween: 30,

        loop: true,

        autoplay: {
                delay: 3500,
        },

        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },

        breakpoints: {

                640: {
                        slidesPerView: 2,
                },

                1024: {
                        slidesPerView: 3,
                },

                1280: {
                        slidesPerView: 4,
                }

        }

});




// faq 
$(".faq-btn").click(function () {

        let content = $(this).next(".faq-content");

        if (content.is(":visible")) {

                content.slideUp(300);

                $(this).find(".faq-icon").text("+");

        } else {

                $(".faq-content").slideUp(300);

                $(".faq-icon").text("+");

                content.slideDown(300);

                $(this).find(".faq-icon").text("−");

        }

});