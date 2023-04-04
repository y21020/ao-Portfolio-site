(function($) {
  'use strict';

  $(function() { 
      var scrollSpeed = 1000, // スクロール時間（ミリ秒）
              buttonOffset = 200; // トップへ戻る固定ボタンを表示するスクロール量（px）
   
      // スムーズスクロール
      $('a[href^="#"]').on( 'click', function() {
          var href= $(this).attr( 'href' );
          if ( href !== '#' || href !== '' ) {
              var target = ( href === '#top' && !$('#top').length ) ? 'html' : href,
                      position = $(target).offset().top;
              $('body, html').animate( {scrollTop:position}, scrollSpeed, 'swing' );
              return false;
          }
      });
  });

})( jQuery );