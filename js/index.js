$(document).ready(function(){
    //slide
    var timet;
    var durTime=5000;
    var _index=-1;
    var _len=$('.slide-content-li').length-1;
    slide();
    timer=setInterval(slide,durTime);
    function slide(){
        _index++;
        if(_index>_len){
            _index=0;
        }
        $('.slide-content-li').eq(_index).addClass('thisSlide').siblings('li').removeClass('thisSlide');
        $('.paginations').eq(_index).addClass('thisPage').siblings('li').removeClass('thisPage');
    }
    $('.paginations').hover(function(){
        if(timer){
            clearInterval(timer);
        }
        _index=$(this).index();
        $(this).removeClass('thisPage').addClass('thisPage').siblings('li').removeClass('thisPage');
        $('.slide-content-li').eq(_index).addClass('thisSlide').siblings('li').removeClass('thisSlide');
    },function(){
        timer=setInterval(slide,durTime);
    });
    $('.slide-prev').click(function(){
        if(timer){
            clearInterval(timer);
        }
        _index--;
        if(_index<0){
            _index=_len;
        }
        console.log(_index);
        $('.paginations').eq(_index).removeClass('thisPage').addClass('thisPage').siblings('li').removeClass('thisPage');
        $('.slide-content-li').eq(_index).addClass('thisSlide').siblings('li').removeClass('thisSlide');
        timer=setInterval(slide,durTime);
    });
    $('.slide-next').click(function(){
        if(timer){
            clearInterval(timer);
        }
        slide();
        timer=setInterval(slide,durTime);
    });
    $('#rBtn-backTop').click(function(){
        $(window).scrollTop(0);
    });
    //
    var topPos=$('.content-focus').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>topPos){
            $('.header-content').addClass('stopTop fixed');
        }else{
            $('.header-content').removeClass('stopTop fixed');
        }
    });
});
