$(document).ready(function() {


$('.img-btn.active').live('click',function(){
    $('.img-btn').toggleClass('active');
    $('#test').slideToggle();
});

}); 