$(document).ready(function(){

 var player1;
 var player2;
 var pickStorm = false;
 var pickC3po = false;
 var pickDarth = false;
 var pickLeia = false;

 function warnPick(){


		if (player1 == true && player2 == false) {

		$('#attack').click(function() {

			alert("Please pick an opponent.");

			})
		}
	}

function enemyPick(){

	if (pickStorm == true) {

		$('#c3po').on('click', function() {
			
			$('.enemychoices').hide();
			$('.enemycharacter').append($('#c3pochar'));
		})
	}

}

 var stormtrooper = {

 		name: 'Storm Trooper',
 		hp: 100,
 		attack: 5,
 		counterattack: 5,
 		imgUrl: 'assets/images/stormtrooper.jpg'
 		
 	}


 var c3po = {

 		name: 'C-3PO',
 		hp: 120,
 		attack: 8,
 		counterattack: 8,
 		imgUrl: 'assets/images/c3po.jpg'
 	}

 var darth = {

 		name: 'Darth Vader',
 		hp: 140,
 		attack: 10,
 		counterattack: 10,
 		imgUrl: 'assets/images/darthvader.jpg'
 	}

 var leia = {

 		name: 'Princess Leia',
 		hp: 160,
 		attack: 12,
 		counterattack: 12,
 		imgUrl: 'assets/images/princessleia.jpg'
 	}
 
// Displays stormtrooper
$('#characterchoices').append("<div class='character' id='stormtrooperchar'></div>");
$('#stormtrooperchar').append("<div id='charactername'>" + stormtrooper.name + "</div>");
$('#stormtrooperchar').append("<button id='stormtrooper'><img alt='character' src='" + stormtrooper.imgUrl + "' height='100'></button>");
$('#stormtrooperchar').append("<div id='healthpoints'>" + stormtrooper.hp + "</div>");

// Displays c3po
$('#characterchoices').append("<div class='character' id='c3pochar'></div>");
$('#c3pochar').append("<div id='charactername'>" + c3po.name + "</div>");
$('#c3pochar').append("<button id='c3po'><img alt='character'src='" + c3po.imgUrl + "' height='100'></button>");
$('#c3pochar').append("<div id='healthpoints'>" + c3po.hp + "</div>");

// Displays Darth Vader
$('#characterchoices').append("<div class='character' id='darthchar'></div>");
$('#darthchar').append("<div id='charactername'>" + darth.name + "</div>");
$('#darthchar').append("<button id='darthvader'><img alt='character' src='" + darth.imgUrl + "' height='100'></button>");
$('#darthchar').append("<div id='healthpoints'>" + darth.hp + "</div>");

// Displays Leia
$('#characterchoices').append("<div class='character' id='leiachar'></div>");
$('#leiachar').append("<div id='charactername'>" + leia.name + "</div>");
$('#leiachar').append("<button id='princessleia'><img alt='character' src='" + leia.imgUrl + "' height='100'></button>");
$('#leiachar').append("<div id='healthpoints'>" + leia.hp + "</div>");



// ----------
// ----------
// ----------

// PLAYER 1 SELECTION
// Selecting storm trooper

$('#stormtrooperchar').on('click', function() {

	if (player1 == true && player2 == true) {

		$('#characterchoices').hide();
		$('.yourcharacter').append($('#stormtrooperchar'));
		$('#attack, #reset').css('visibility', 'visible');
		
		player1 = true;
		player2 = false;

		$('.enemychoices').append($('#c3pochar, #darthchar, #leiachar'));
		$('#c3pochar, #darthchar, #leiachar').css('background-color', 'red');

		warnPick();
		pickStorm = true;
		

	}
})
	


// Selecting c3po
$('#c3pochar').on('click', function() {

		$('#characterchoices').hide();
		$('.yourcharacter').append($('#c3pochar'));
		$('#attack, #reset').css('visibility', 'visible');

		player1 = true;
		player2 = false;

		$('.enemychoices').append($('#stormtrooperchar, #darthchar, #leiachar'));
		$('#stormtrooperchar, #darthchar, #leiachar').css('background-color', 'red');

		warnPick();
		pickC3po = false;


	})

// Selecting Darth Vader
$('#darthchar').on('click', function() {

		$('#characterchoices').hide();
		$('.yourcharacter').append($('#darthchar'));
		$('#attack, #reset').css('visibility', 'visible');

		player1 = true;
		player2 = false;

		$('.enemychoices').append($('#stormtrooperchar, #c3pochar, #leiachar'));
		$('#c3pochar, #stormtrooperchar, #leiachar').css('background-color', 'red');

		warnPick();
		pickDarth = false;


	})

// Selecting Princess Leia
$('#leiachar').on('click', function() {

		$('#characterchoices').hide();
		$('.yourcharacter').append($('#leiachar'));
		$('#attack, #reset').css('visibility', 'visible');

		player1 = true;
		player2 = false;

		$('.enemychoices').append($('#stormtrooperchar, #c3pochar, #darthchar'));
		$('#c3pochar, #darthchar, #stormtrooperchar').css('background-color', 'red');

		warnPick();
		pickLeia = false;



	})


// PLAYER 2 SELECTION



});

	







