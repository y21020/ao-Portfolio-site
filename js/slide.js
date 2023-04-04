//画像のスライド

    $(function(){
      //web-slide
      var $width = 1920; //以下同文
      var $height = 990; //以下同文
      var $interval = 5000; //以下同文
      var $fade_speed = 2000; //以下同文
      $(".web-slide .slide-ul .slide-li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
      $(".web-slide .slide-ul .slide-li").hide().css({"position":"absolute","top":0,"left":0});
      $(".web-slide .slide-ul .slide-li:first").addClass("active").show();
      setInterval(function(){
      var $active = $(".web-slide .slide-ul .slide-li.active");
      var $next = $active.next(".slide-li").length?$active.next(".slide-li"):$(".web-slide .slide-ul .slide-li:first");
      $active.fadeOut($fade_speed).removeClass("active");
      $next.fadeIn($fade_speed).addClass("active");
      },$interval);
      });
    $(function(){
      //dtp-slide
      var $width = 1920; //以下同文
      var $height = 990; //以下同文
      var $interval = 5000; //以下同文
      var $fade_speed = 2000; //以下同文
      $(".dtp-slide .slide-ul .slide-li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
      $(".dtp-slide .slide-ul .slide-li").hide().css({"position":"absolute","top":0,"left":0});
      $(".dtp-slide .slide-ul .slide-li:first").addClass("active").show();
      setInterval(function(){
      var $active = $(".dtp-slide .slide-ul .slide-li.active");
      var $next = $active.next(".slide-li").length?$active.next(".slide-li"):$(".dtp-slide .slide-ul .slide-li:first");
      $active.fadeOut($fade_speed).removeClass("active");
      $next.fadeIn($fade_speed).addClass("active");
      },$interval);
      });

    $(function(){
      //illust-slide
      var $width = 1920; //以下同文
      var $height = 990; //以下同文
      var $interval = 5000; //以下同文
      var $fade_speed = 2000; //以下同文
      $(".illust-slide .slide-ul .slide-li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
      $(".illust-slide .slide-ul .slide-li").hide().css({"position":"absolute","top":0,"left":0});
      $(".illust-slide .slide-ul .slide-li:first").addClass("active").show();
      setInterval(function(){
      var $active = $(".illust-slide .slide-ul .slide-li.active");
      var $next = $active.next(".slide-li").length?$active.next(".slide-li"):$(".illust-slide .slide-ul .slide-li:first");
      $active.fadeOut($fade_speed).removeClass("active");
      $next.fadeIn($fade_speed).addClass("active");
      },$interval);
      });
      

      
        