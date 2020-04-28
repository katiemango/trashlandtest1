$(document).ready(function(){

  $( ".basic" ).draggable();

	// Array Database of Trash Facts
  var messages = ["In 200AD, the Romans devised the first sanitation force, consisting of two men walking along the streets to pick up trash with wagons", "The common practice in the Middle Ages in Europe was to throw trash onto the streets. The piles caused terrible smells, harbored pests, contaminated water, and spread diseases such as the black plague", "Around 1350, Britain passed a law that mandated clean front yards to address the trash problem. Few people listened", "In 1354, King Edward III ordered English rakers to remove refused from the streets once a week — an early version of a garbageman", "Around 1757, Ben Franklin started the first street cleaning service and encouraged the public to dig pits to disposed of their waste", "The idea of municipal trash collection didn’t pick up steam until the 1890s, when industrialization was well-established", "The first occurence of organized waste management appeared in London in the late 18th century", "A common waste management practice in the 1800s/1900s was to send waste to “piggeries,” small farms full of pigs that consumed waste", "1875: the first trash bin appeared in England, and was used to store ash from burned waste", "1885: the first American garbage incinerator was built on Governor’s Island, New York", "New York City instituted public-sector garbage management in 1895, which inspired other American cities to follow", "New York City instituted public-sector garbage management in 1895, which inspired other American cities to follow", "1920s: “reclaiming” or filling in wetlands near cities with garbage, ash, and dirt, became a popular disposal method", "1960s: plastic replaced cardboard and glass because it was lighter and cheaper", "1970: the first Earth Day was celebrated", "By 1990, each person produced 5.6 pounds of trash per day in the U.S.", "7.1 pounds per day: the average amount of trash Americans produce in 2020"];
  var factNumber = 0;
  // Double click
  $(".basic").dblclick(function() {
    // alert("You double clicked");
    $(".trashMessage").text(messages[factNumber]);
    if (factNumber < messages.length - 1){
      factNumber++;
    } else {
      factNumber = 0;
    }
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
