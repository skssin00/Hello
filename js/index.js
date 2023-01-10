import $ from 'jquery';

$(function(){
    //미디어의 크기에 따라서 작동되는것이 틀리게
    let ww = $(window).width();
    console.log(ww)
    //사이즈별로 함수 등록
    if(ww > 1106){
        nav();
        aside();

    }
    else if(ww <= 1106 && ww > 980){
        mobileNav()
        gallery()
    }
    else if(ww <= 979 && ww > 580){
        mobileNav()
        gallery()
    }
    else if(ww <= 579){
        mobileNav()
        gallery()

    }
    //reset

})

//함수 등록

function nav(){
    // console.log('welcome')

    $('nav li>a').on('click',function(){
        const navA = $(this).attr('href');
        // console.log(navA)
        const aPos = $(navA).offset().top;
        // console.log(aPos)
        $('html,body').animate({scrollTop:aPos},800)
            return false;
    })
    // onclick('nav a')
    // let navA = this.attr('href')
    // let aPos = getElementById('navA').offsetTop
    // console.log('navA')
    
}

function mobileNav(){
    let navW = $('nav').width();
    $('p.btn').on('click',function(e){
        // $(this).css('display','none');
        $(this).hide();
        $('nav').animate({left:0},500);
        $('nav .close').show()
    })
//nav a : click

$('nav li a').on('click',function(e){
    const navA = $(this).attr('href');
        // console.log(navA)
        const aPos = $(navA).offset().top;
        // console.log(aPos)
        $('html,body').animate({scrollTop:aPos},800)
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show()
        $('nav .close').hide()
            return false;
})

}
function aside(){
    $('aside li>a').on('click',function(e){
        const asideA = $(this).attr('href');
        const aPos = $(asideA).offset().top;
        $('html,body').animate({scrollTop:aPos});
        return false;
    })
}


function gallery(){
    const figureW = $('#all figure').width();
    //준비하기
    // console.log(figureW)
    const lastChild = $('#all figure:last')
    $(lastChild).prependTo('#all')
    $('#all').css('margin-left','-' + figureW +'px')

    $('#gallery .prev').on('click',function(e){
        $('#all').animate({marginLeft:'+='+figureW+'px'},500,function(){
            $('#all figure:last').prependTo('#all')
            $('#all').css('margin-left','-'+figureW+'px')
        })
    })
    $('#gallery .next').on('click',function(e){
        $('#all').animate({marginLeft:'-='+figureW+'px'},500,function(){
            $('#all figure:first').appendTo('#all')
            $('#all').css('margin-left','-'+figureW+'px')
        })
    })
}





//javascript
//생성자함수 Modal 

function Modal(title,pic,year,program,text,url){
    this.title = title;


}
Modal.prototype.action = function(){
    const title = document.querySelector('#modal h3')
    title.innerHTML = this.title;
}

const myModal = new Modal('work01','이미지주소',2021,'program군단','http://주소')


let btn = document.querySelectorAll('#all figure');
btn.forEach(function(item){item.addEventListener(
    
)})