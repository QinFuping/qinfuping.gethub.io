$(document).ready(function(){
   //back top
    $('#rBtn-backTop,#goods-backTop').click(function(){
        $(window).scrollTop(0);
    });
    //form
    $('.user-form-nav-li').hover(function() {
        var i=$(this).index();
        $(this).addClass('thisLi').siblings('li').removeClass('thisLi');
        $('.user-form-content-li').eq(i).addClass('thisForm').siblings('li').removeClass('thisForm');
    });
});
