var quotes = [	"Be yourself; everyone else is already taken.",
	"Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
	"You know you are in love when you can\'t fall asleep because reality is finally better than your dreams.",
	"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
	"Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend.",
	"No one can make you feel inferior without your consent. ",
	"A friend is someone who knows all about you and still loves you.",
	"Live as if you were to die tomorrow. Learn as if you were to live forever.",
	"In order to succeed, we must first believe that we can.",
	"Keep your eyes on the stars, and your feet on the ground.",
	"Always do your best. What you plant now, you will harvest later.",
	"It always seems impossible until it's done."
];

var author = [ "Oscar Wilde.",
	"Albert Einstein.",
	"Dr. Seuss.",
	"C.S. Lewis.",
	"Albert Camus.",
	"Eleanor Roosevelt.",
	"Elbert Hubbard.",
	"Mahatma Gandhi.",
	"Nikos Kazantzakis.",
	"Theodore Roosevelt.",
	"Og Mandino.",
	"Nelson Mandela."
];

$("#text").html(quotes[0]);
$("#author").html(author[0]);

$("#new-quote").on( "click", function () {

	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var Rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

		$("#text").fadeOut(300, function(){
			$("#text").html(quotes[randomNumber]).fadeIn(400);
		});

		$("#author").fadeOut(300, function(){
			$("#author").html(author[quotes.indexOf(quotes[randomNumber])]).fadeIn(400);
		});

		$(document.body).css("background", Rgb);
});
