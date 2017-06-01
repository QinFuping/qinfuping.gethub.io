$(document).ready(function(){
    //lazy load
    $("img").lazyload({
        effect:"fadeIn",
        threshold:"1000",
        failure_limit:"10",
    });
    //back top
    $('#rBtn-backTop,#goods-backTop').click(function(){
        $(window).scrollTop(0);
    });
    //image
    $('.goods-preview-li').hover(function(){
        $(this).addClass('goods-cur').siblings('li').removeClass('goods-cur');
        $('#bigImage')[0].src=$(this).children('img')[0].src;
    });
    //type
    $('.goods-type-li').click(function(){
        $(this).addClass('thisType').siblings('li').removeClass('thisType');
    });
    // quantity of goods
    $('.goods-quantity-decrease').click(function(){
        var i=$('.goods-quantity-set').val();
        i--;
        if(i<1){
            i=1;
        }
        $('.goods-quantity-set').val(i);
    });
    $('.goods-quantity-increase').click(function(){
        var i=$('.goods-quantity-set').val();
        i++;
        $('.goods-quantity-set').val(i);
    });
    //navigation
    $('.goods-detail-nav-li').click(function(){
        $(this).addClass('thisDetail').siblings('.goods-detail-nav-li').removeClass('thisDetail');
    });
    //comment
    $('.goods-comment-nav-li').click(function(){
        var i=$(this).index();
        console.log(i);
        $(this).addClass('thisComment').siblings('.goods-comment-nav-li').removeClass('thisComment');
        $('.goods-comment-content-li').eq(i).addClass('thisComment2').siblings('.goods-comment-content-li').removeClass('thisComment2');
    });
    //window scroll
    var fixPos=$('.goods-detail').offset().top;
    var currentPos=$('.currentPos').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>fixPos){
            $('.goods-detail-top').addClass('fixed stopHere');
            $('.goods-detail-content').css('paddingTop','44px');
            $('.goods-detail-top-btn-buy').css('display','inline-block');
        }else{
            $('.goods-detail-top').removeClass('fixed stopHere');
            $('.goods-detail-content').css('paddingTop','0');
            $('.goods-detail-top-btn-buy').css('display','none');
        }
        if($(window).scrollTop()>currentPos){
            $('.currentgoods').addClass('fixed curStop');
        }else{
            $('.currentgoods').removeClass('fixed curStop');
        }
    });
});
