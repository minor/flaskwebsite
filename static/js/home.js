$(function() {
  $(".typed").typed({
    strings: [
      "start saurish.life<br/>" + 
      "><span class='caret'>$</span> education: sophomore at <a href='https://evhs.schoolloop.com/'>evergreen valley high school</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: debate, volleyball, hiking, photography, robbing the nearest nothingbundtcakes<br/> ^100" +
      "><span class='caret'>$</span> relevant coursework: ap calc ab, ap physics 1<br/> ^300" +
      "><span class='caret'>$</span> clubs: biomedical engineering, synthetic biology, speech and debate, programming, volleyball<br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});