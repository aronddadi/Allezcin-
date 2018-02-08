$(window).on('load', function() { // age check modal on page load
  $('#ageWarning').modal('show');
});

let isItOlderThan18 = function(year, month, day) { // checks if user is older than 18 years old and returns true/false
  return new Date(year + 18, month - 1, day) <= new Date();
};

$('#ageVerif').click(function() { //
  if (isItOlderThan18(Number($('#birthInput').val().split('-')[0]), Number($('#birthInput').val().split('-')[1]), Number($('#birthInput').val().split('-')[2])) === true) {
    $('#ageWarning').modal('hide');
  } else {
    location.href = 'http://www.imdb.com/';
  };
});

$('#ageWarning').on('hidden.bs.modal', function() {
  if (isItOlderThan18(Number($('#birthInput').val().split('-')[0]), Number($('#birthInput').val().split('-')[1]), Number($('#birthInput').val().split('-')[2])) === true) {
    $('#ageWarning').modal('hide');
  } else {
    location.href = 'http://www.imdb.com/';
  }
})

$('#loginModal').on('shown.bs.modal', function() {
  $('#username').trigger('focus')
});

$('#registerModal').on('shown.bs.modal', function() {
  $('#name').trigger('focus');
});
$('#login').on('click'function(){
   $('#registerModal').modal('show');
 });

$('#newAccount').click(function() {
  $('#registerModal').modal('show');
});

$('#cookies').click(function(e) {
  $(this).parent().removeClass('d-flex');
  $(this).parent().hide();
});

// Activation of "smooth scroll"
// Select all links with hashes
// Remove links that don't actually link to anything thanks to .not()
// based on function availble here https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 150
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        let $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
