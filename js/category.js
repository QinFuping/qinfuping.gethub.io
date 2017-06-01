$(document).ready(function(){
    //back top
    $('#rBtn-backTop').click(function(){
        $(window).scrollTop(0);
    });
    //slide
    var durTime=5000;
    var timer;
    var _index=-1;
    var _len=$('.category-slide-li').length-1;
    for (var i = 0; i < _len+1; i++) {
    	$('.slide-pagination')[0].innerHTML+='<li class="paginations">'+parseInt(i+1)+'</li>';
    }
    $('.paginations').eq(0).addClass('thisPage');
    slide();
    timer=setInterval(slide,durTime);
    function slide(){
    	_index++;
        if(_index>_len){
            _index=0;
        }
        $('.category-slide-li').eq(_index).addClass('currentSlide').siblings('li').removeClass('currentSlide');
        $('.paginations').eq(_index).addClass('thisPage').siblings('li').removeClass('thisPage');
    }
    $('.paginations').hover(function(){
    	if(timer){
    		clearInterval(timer);
    	}
    	var i=$(this).index();
    	$(this).addClass('thisPage').siblings('li').removeClass('thisPage');
    	$('.category-slide-li').eq(i).addClass('currentSlide').siblings('li').removeClass('currentSlide');
    },function(){
    	timer=setInterval(slide,durTime);
    });
    $('.category-slide-prev').click(function(){
        if(timer){
            clearInterval(timer);
        }
        _index--;
        if(_index<0){
            _index=_len;
        }
        $('.paginations').eq(_index).addClass('thisPage').siblings('li').removeClass('thisPage');
    	$('.category-slide-li').eq(_index).addClass('currentSlide').siblings('li').removeClass('currentSlide');
        timer=setInterval(slide,durTime);
    });
    $('.category-slide-next').click(function(){
        if(timer){
            clearInterval(timer);
        }
        slide();
        timer=setInterval(slide,durTime);
    });
    //windows scroll
    $(window).scroll(function(){
       var flagPos=$('.category-floor-title').eq(0).offset().top;
       if($(window).scrollTop()>flagPos){
           $('.nav').addClass('fixed nav-stop');
           $('.category').css('paddingTop','33px');
       }else{
           $('.nav').removeClass('fixed nav-stop');
           $('.category').css('paddingTop','0');
       }
    });
    //floor
    $('.category-floor-goods-img').hover(function(){
    	$(this).addClass('thisGoods').siblings('li').removeClass('thisGoods');
    	$(this).parent().siblings('img')[0].src=this.getElementsByTagName('img')[0].src;
    });
});
