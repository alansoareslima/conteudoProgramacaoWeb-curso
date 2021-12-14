$('.titulo').next().hide();

$('.titulo').click(function(){
    $('.titulo').next().slideUp();
    $(this).next().slideToggle();
});
