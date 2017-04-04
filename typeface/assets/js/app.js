var charsTyped = 0;

$(window).keypress(function(e) {
  // console.log(e.which);
  charsTyped++;
  console.log(charsTyped);
  if ((charsTyped*140 + 100) > $(window).width()) {
    console.log("do new line stuff");
    charsTyped = 0;
    $(window).scrollTop($(window).scrollTop() + 200);
  }
  $(window).scrollTop({  
  behavior: 'smooth' 
});

  e.preventDefault();

  if (e.which == 97 || e.which == 65) {
  	$(".stage").append($(".a-marker").clone().removeClass("a-marker"));
  }

  if (e.which == 98 || e.which == 66) {
  	$(".stage").append($(".b-marker").clone().removeClass("b-marker"));
  }

   if (e.which == 99 || e.which == 67) {
  	$(".stage").append($(".c-marker").clone().removeClass("c-marker"));
  }

   if (e.which == 100 || e.which == 68) {
  	$(".stage").append($(".d-marker").clone().removeClass("d-marker"));
  }

   if (e.which == 101 || e.which == 69) {
  	$(".stage").append($(".e-marker").clone().removeClass("e-marker"));
  }

   if (e.which == 102 || e.which == 70) {
  	$(".stage").append($(".f-marker").clone().removeClass("f-marker"));
  }

   if (e.which == 103 || e.which == 71) {
  	$(".stage").append($(".g-marker").clone().removeClass("g-marker"));
  }

   if (e.which == 104 || e.which == 72) {
  	$(".stage").append($(".h-marker").clone().removeClass("h-marker"));
  }

   if (e.which == 105 || e.which == 73) {
  	$(".stage").append($(".i-marker").clone().removeClass("i-marker"));
  }

   if (e.which == 106 || e.which == 74) {
  	$(".stage").append($(".j-marker").clone().removeClass("j-marker"));
  }

   if (e.which == 107 || e.which == 75) {
  	$(".stage").append($(".k-marker").clone().removeClass("k-marker"));
  }

   if (e.which == 108 || e.which == 76) {
  	$(".stage").append($(".l-marker").clone().removeClass("l-marker"));
  }

   if (e.which == 109 || e.which == 77) {
  	$(".stage").append($(".m-marker").clone().removeClass("m-marker"));
  }

   if (e.which == 110 || e.which == 78) {
  	$(".stage").append($(".n-marker").clone().removeClass("n-marker"));
  }

   if (e.which == 111 || e.which == 79) {
  	$(".stage").append($(".o-marker").clone().removeClass("o-marker"));
  }

   if (e.which == 112 || e.which == 80) {
  	$(".stage").append($(".p-marker").clone().removeClass("p-marker"));
  }

   if (e.which == 113 || e.which == 81) {
  	$(".stage").append($(".q-marker").clone().removeClass("q-marker"));
  }

   if (e.which == 114 || e.which == 82) {
  	$(".stage").append($(".r-marker").clone().removeClass("r-marker"));
  }

   if (e.which == 115 || e.which == 83) {
  	$(".stage").append($(".s-marker").clone().removeClass("s-marker"));
  }

   if (e.which == 116 || e.which == 84) {
  	$(".stage").append($(".t-marker").clone().removeClass("t-marker"));
  }

   if (e.which == 117 || e.which == 85) {
  	$(".stage").append($(".u-marker").clone().removeClass("u-marker"));
  }

   if (e.which == 118 || e.which == 86) {
  	$(".stage").append($(".v-marker").clone().removeClass("v-marker"));
  }

   if (e.which == 119 || e.which == 87) {
  	$(".stage").append($(".w-marker").clone().removeClass("w-marker"));
  }

   if (e.which == 120 || e.which == 88) {
  	$(".stage").append($(".x-marker").clone().removeClass("x-marker"));
  }

   if (e.which == 121 || e.which == 89) {
  	$(".stage").append($(".y-marker").clone().removeClass("y-marker"));
  }

   if (e.which == 122 || e.which == 90) {
  	$(".stage").append($(".z-marker").clone().removeClass("z-marker"));
  }

   if (e.which == 32) {
    $(".stage").append($(".space-marker").clone().removeClass("space-marker"));
  }

  //$( ".blinking-cursor" ).hide();
$(window).width();



});





















