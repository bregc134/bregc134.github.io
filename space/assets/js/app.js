console.log("hello");

var foods = 0;
var colors = [];

$(".hit p").click(function() {
	foods++;
	if (foods < 4) {
		colors.push($(this).css("color"));
		$(".num-foods").html(foods);
	} 
	if (foods == 3) {
		$(".overlay").show();
	}
	console.log("clicked");
});

