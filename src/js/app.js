// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
$('.section-one').hover(function() {
  $('.custom-container').toggleClass('one-is-active');
});

$('.section-two').hover(function() {
  $('.custom-container').toggleClass('two-is-active');
});

$('.scroll').click(function() {
  $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 800);
});
