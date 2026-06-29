
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