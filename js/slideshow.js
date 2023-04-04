//背景画像のスライド

$('.web-slider').slick({
  autoplay:true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1500,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: false,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots:false,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

$('.dtp-slider').slick({
  autoplay:true,
  autoplaySpeed: 5000,
  speed:1500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots:false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  });

$('.illust-slider').slick({
  autoplay:true,
  autoplaySpeed: 7000,
  speed:1500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots:false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});