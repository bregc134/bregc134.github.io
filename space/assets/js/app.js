console.log("hello");

var foods = 0;
var colors = [];
var ingredients = [];

$(".hit p").click(function() {
	foods++;
	if (foods < 4) {
		colors.push($(this).css("color"));
		ingredients.push($(this).html());
		$(".num-foods").html(foods);
	} 
	if (foods == 3) {
		$(".overlay").show();
		$(".poem1").show();
		$(".overlay").css("background","linear-gradient(to bottom, " + colors[0] + " 20%," + colors[1] + " 50%," + colors[2] + " 80%")
	}
	console.log("clicked");
});

