
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');

menuBtn.on('click', function() {
  mobileMenu.toggleClass('hidden');
});