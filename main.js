$(document).ready(function(){

  $( ".basic" ).draggable();

	// Array Database of Trash Facts
  var messages = ["Banana peel", "Plastic wrapping", "Coffee grinds", "Can", "Old spinach", "Straw", "Old papers", "Takeout box", "Wine bottle", "Glass jar", "Yogurt cup", "Paint bottle", "Plastic bag", "Old marker", "Old tank top", "Dead flowers", "Empty candle", "Broken glass", "Used paper towel", "Cut up credit card", "Yesterday's newspaper", "Broken thermometer"];
  var factNumber = 0;

  // Double click
    $(".basic").click(function(){
	if(count % 5 === 0);
    $(".trashMessage").text(messages[factNumber]);

});


function distributeTrash() {
	$(".basic").each(function() {
		var xRange = $(window).width() - $(this).width();
		var yRange = $(window).height() - $(this).height();
		var randomX = Math.floor(Math.random()*xRange);
		var randomY = Math.floor(Math.random()*yRange);
		$(this).css({"top" : randomY, "left": randomX});
	});

// 	var randomX = Math.floor(Math.random()*1200);
// 	var randomY = Math.floor(Math.random()*1200);
// 	trash[t].style.left = randomX; 
// 	trash[t].style.top = randomY;
// 	}
// }

}
distributeTrash();

});
