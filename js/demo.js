$(document).ready(function(e) {
  changeImg();

  function changeImg() {
    // 获取图片标签长度
    count = $("#banner_list img").length;
    // 不是当前显示的图片隐藏
    $("#banner_list img:not(:first-child)").hide();
    // 点击下面的1234按钮，切换图片
    $("#banner li").click(function() {
      var i = $(this).text() - 1;
      n = i;
      if (i >= count) return;
      // 淡入淡出效果
      $("#banner_list img").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);

      // 响应点击
      $(this).toggleClass("on");

      // 切换按钮的时候让上一个按钮回归原来的样式
      $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 4000);
    $("#banner").hover(function() {
        clearInterval(t)
      },
      function() {
        t = setInterval("showAuto()", 4000);
      });
  }

  $('#rank').click(function() {
    $('.news').find("li").show();
  })

  $('#Latest').click(function() {
    $('.news li').first().hide();
  })

  $('#recommend').click(function() {
    $('.news li').last().hide();
  })

  // 自动轮播
  function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
  }

})
