$(document).ready(function(){

  $(window).scroll(function(){

    let scrPosition = $(this).scrollTop();
    $("#txt2").text(scrPosition);

    if(scrPosition>=700){
      $("#s1 .train-01").addClass("active");
    };
    if(scrPosition>=4000){
      $("#s4 .train-02").addClass("active");
    };
    if(scrPosition>=5500){
      $("#s5 .train-03").addClass("active");
    };
  });
  
  //Menu___
  $("header .main").hover(function(){
    $(this).find(".sub").stop().delay(300).slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  //Main___
  let $imgA = $("main .caption a"),
      $textA = $("main .text div"),
      $btnA = $("main .indicator span"),
      oldImgA = 0,
      newImgA = 0,
      oldTextA = 0,
      newTextA = 0,
      countA = $imgA.length;
  
  function changeImgA(newImgA){
    if(oldImgA != newImgA){
      let tabMoveA = 100*newImgA;
      $("main .indicator .btn-bg").animate({left:tabMoveA});
      $imgA.eq(oldImgA).stop().fadeOut(300);
      $imgA.eq(newImgA).stop().fadeIn(300);
    };
    oldImgA = newImgA;
  };
  function changeTextA(newTextA){
    if(oldTextA != newTextA){
      let tabMoveB = 100*newTextA;
      $("main .indicator .btn-bg").animate({left:tabMoveB});
      $textA.eq(oldTextA).stop().fadeOut(300);
      $textA.eq(newTextA).stop().hide().fadeIn(300); 
    };
    oldTextA = newTextA;
  };

  function autoImgA(){
    newImgA++;
    if(newImgA>countA-1){
      newImgA=0;
    };
    changeImgA(newImgA);
  };
  function autoTextA(){
    newTextA++;
    if(newTextA>countA-1){
      newTextA=0;
    };
    changeTextA(newTextA);
  };
  timerImgA = setInterval(autoImgA,4000);
  timerTextA = setInterval(autoTextA,4000);

  $btnA.click(function(){
    newImgA=$(this).index();
    changeImgA(newImgA);

    newTextA=$(this).index();
    changeTextA(newTextA);
  });

  $("main").mouseenter(function(){
    clearInterval(timerImgA);
    clearInterval(timerTextA);
  })
  .mouseleave(function(){
    timerImgA = setInterval(autoImgA,4000);
    timerTextA = setInterval(autoTextA,4000);
  });

  $("main .btn p").click(function(){
    let tabNumA = $(this).index();
    let tabMoveB = 180*tabNumA;

    $("main .btn .btn-bg").animate({left:tabMoveB});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $("#s2 .btn p").click(function(){
    let tabNumB = $(this).index();
    let tabMoveC = 200*tabNumB;

    $("#s2 .btn .btn-bg").animate({left:tabMoveC});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $("#s2 .indicator p").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let resultA = $(this).attr("data-alt");
    $(".content div").removeClass("active");
    $("."+resultA).addClass("active").hide().fadeIn();
  });

  let $imgB = $("#s3 .content>div"),
      $btnB = $("#s3 .indicator span"),
      oldImgB = 0,
      newImgB = 0,
      countB = $imgB.length;
  
  function changeImgB(newImgB){
    if(oldImgB != newImgB){
      let tabMoveD = 200*newImgB;
      $("#s3 .indicator .btn-bg").animate({left:tabMoveD});
      $imgB.eq(newImgB).stop().animate({left: "-760px"});
      $imgB.eq(oldImgB).appendTo("#s3 .content");
    };
    oldImgB = newImgB;
  };

  function autoImgB(){
    newImgB++;
    if(newImgB>countB-1){
      newImgB=0;
    };
    changeImgB(newImgB);
  };

  timerImgB = setInterval(autoImgB,4000);

  $btnB.click(function(){
    let tabNumC = $(this).index();
    let tabMoveE = 200*tabNumC;
      $("#s3 .indicator .btn-bg").animate({left:tabMoveE});

    let resultA = $(this).attr("data-alt");
    let tabNumD = $("."+resultA).index();
    let tabMoveF = 760*tabNumD;
      $("#s3 .content").stop().animate({left:-tabMoveF});
  });

  $("#s3 .box").mouseenter(function(){
    clearInterval(timerImgB);
  })
  .mouseleave(function(){
    timerImgB = setInterval(autoImgB,4000);
  });

});