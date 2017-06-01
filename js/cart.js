$(document).ready(function(){
    //payment
    $('.cart-step-payment-list').click(function(){
        $(this).addClass('thisPayment').siblings('div').removeClass('thisPayment');
    });
    //quantity
    toPrice();
    $('.goods-quantity-decrease').click(function(){
        var i=$(this).siblings('input').val();
        var thisPrice=parseInt($(this).parent().parent().siblings().children('.q_price').text());
        i--;
        if(i<1){
            i=1;
        }
        $(this).siblings('input').val(i);
        $(this).parent().parent().siblings().children('.t_price').text(thisPrice*i+'.00');
        toPrice();
    });
    $('.goods-quantity-increase').click(function(){
        var i=$(this).siblings('input').val();
        var thisPrice=parseInt($(this).parent().parent().siblings().children('.q_price').text());
        i++;
        $(this).siblings('input').val(i);
        $(this).parent().parent().siblings().children('.t_price').text(thisPrice*i+'.00');
        toPrice();
    });
    $('.goods-quantity-set').blur(function(){
        var i=$(this).val();
        var thisPrice=parseInt($(this).parent().parent().siblings().children('.q_price').text());
        $(this).parent().parent().siblings().children('.t_price').text(thisPrice*i+'.00');
        toPrice();
    });
    function toPrice(){
        var tp=0;
        for(var i=0;i<$('.t_price').length;i++){
            tp+=parseInt($('.t_price').eq(i).text());
        }
        $('#cart-goods-totle').text('￥'+tp+'.00');
    }
});
