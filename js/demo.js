$(document).ready(function(e) {
  changeImg();

  function changeImg() {
    var imgs = $('#top-img li');
    var nums = $('#top-num li');

    var isStop = false;
    var index = 0;

    nums.eq(index).addClass("numover");
    nums.eq(index).siblings().removeClass("numover");
    imgs.eq(index).show();

    nums.mouseover(function() {
      isStop = true;
      $(this).addClass("numover").siblings().removeClass("numover");
      index = nums.index(this);
      imgs.eq(index).show("slow");
      imgs.eq(index).siblings().hide("slow");
    }).mouseout(function() {
      isStop = false;
    });
  }
})
