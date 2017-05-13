$(document).ready(function(){
    var navHere=$('#nav').offset().top;
    var navHeight=$('#nav').height();
    var timerPos=$('.grids').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>=navHere){
            $('#nav').addClass('fixed navStop');
            $('#content').css({paddingTop:navHeight+'px'});
        }else{
            $('#nav').removeClass('fixed navStop');
            $('#content').css({paddingTop:'0'});
        }
    });
    //slide
    var timer;
    var durTime=5000;
    var _index=0;
    var _len=$('.slide-li').length-1;
    slide();
    timer=setInterval(slide,durTime);
    function slide(){
        $('.slide-li').eq(_index).removeClass('thisSlide').addClass('thisSlide').siblings('.slide-li').removeClass('thisSlide');
        _index++;
        if(_index>_len){
            _index=0;
        }
    }
    $('#slide-prev').click(function(){
        clearInterval(timer);
        _index--;
        if(_index<=-1){
            _index=_len;
        }
        $('.slide-li').eq(_index-1).removeClass('thisSlide').addClass('thisSlide').siblings('.slide-li').removeClass('thisSlide');
        timer=setInterval(slide,durTime);
    });
    $('#slide-next').click(function(){
        clearInterval(timer);
        slide();
        timer=setInterval(slide,durTime);
    });

    //grid of list
    $('.grid-btn-eye').hover(function(){
        $('.grid-btn-view').addClass('grid-btn-view2');
    },function(){
        $('.grid-btn-view').removeClass('grid-btn-view2');
    });
    $('.grid-item').hover(function(){
        this.getElementsByClassName('grid-btn')[0].className='grid-btn grid-btn2';
        this.getElementsByClassName('grid-text-wrapper')[0].className='grid-text-wrapper grid-text-wrapper2';
        this.getElementsByClassName('gridImage')[0].className='gridImage scaleImage';
    },function(){
        this.getElementsByClassName('grid-btn')[0].className='grid-btn';
        this.getElementsByClassName('grid-text-wrapper')[0].className='grid-text-wrapper';
        this.getElementsByClassName('gridImage')[0].className='gridImage';
    });
    //recommend
    $('.recommend-prev').click(function(){

    });
});
