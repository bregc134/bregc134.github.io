console.log("hello");

var foods = 0;
var colors = [];
var ingredients = [];
var poems = ["Let's get cooking ", "The meal you chose is ", "This could be a great start ", "May I suggest ", "My favorite foods are ", "This may not taste so good with ", "I'm hungry for ", "My stomach is craving ", "Give me a lunch full of ", "Tasty beginnings with ", "Scrumptious snack with ", "My delightful dinner is ", "I cannot wait for my blissful breakfast of ", "There's something special about ", "Someone please bring me ", "Let's compose a meal with "];
var randPoem = Math.floor(Math.random()*poems.length);
console.log(randPoem);


$(".hit p").click(function() {
	foods++;
	if (foods < 4) {
		colors.push($(this).css("color"));
		ingredients.push($(this).html());
		$(".num-foods").html(foods);
	} 
	if (foods == 3) {
		$(".overlay").show();
		$(".poem").show();
		$(".overlay").css("background","linear-gradient(to bottom, " + colors[0] + " 25%," + colors[1] + " 50%," + colors[2] + " 75%");

		$(".poem").append(poems[randPoem]);

		for (i=0; i < ingredients.length; i++) {
			if (i == 1) {
				$(".poem").append(", ");
			}
			if (i == 2){
				$(".poem").append(", and ");
			}
			$(".poem").append(ingredients[i]);
		}
		$(".poem").append("; it sounds too good to be true!");

	}
	if (foods == 3) {
		$(".refresh").show();
		$(".refresh").css("background","linear-gradient(to top, " + colors[0] + " 25%," + colors[1] + " 50%," + colors[2] + " 75%")
	}
	console.log("clicked");
});

$(".refresh").click(function() {
	window.location.reload();
})

