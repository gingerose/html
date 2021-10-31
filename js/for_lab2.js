$('.js-button-campaign').click(function() {
    $('header').css('filter', 'blur(5px)');
    $('main').css('filter', 'blur(5px)');
    $('footer').css('filter', 'blur(5px)');
    $('.js-overlay-campaign').fadeIn();
    $('js-overlay-campaign').addClass('disabled');
});
$('.js-teacher-campaign').click(function() {
    $('header').css('filter', 'blur(5px)');
    $('main').css('filter', 'blur(5px)');
    $('footer').css('filter', 'blur(5px)');
    $('.js-overlay-teacher-campaign').fadeIn();
    $('js-overlay-teacher-campaign').addClass('disabled');
});

$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut();
    $('.js-overlay-teacher-campaign').fadeOut();
    $('main').css('filter', 'none');
    $('header').css('filter', 'none');
    $('footer').css('filter', 'none');
});

$(document).mouseup(function(e){
    let popup = $('.js-popup-campaign');
    if(e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-campaign').fadeOut();
        $('.js-overlay-teacher-campaign').fadeOut();
        $('main').css('filter', 'none');
        $('header').css('filter', 'none');
        $('footer').css('filter', 'none');
    }
})