// window scroll > 100
$(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
                $('#arrowBtn').removeClass('hidden');
        } else {
                $('#arrowBtn').addClass('hidden');
        }
});