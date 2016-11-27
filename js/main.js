function askQuestions(){

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName; 
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		console.log ('User is an adult');

	}

	if (firstName =='General' && lastName != 'Assembly'){
		console.log ('greetings, General') 

	}

	var faveColour = prompt ('what is your favourite colour?');
	favecolour = faveColour.toLowerCase().trim ();

	if (favecolour == 'red' ||
		favecolour == 'green' ||
	    favecolour == 'blue' ||
	    favecolour == 'yellow') {

	$('h1').css('color', faveColour);

	}

}

// When the page has loaded
$(function() {

    $('img').on('click', askQuestions);

//when the user clicks an h3
$('h3').on('click', function () {

   // Hide the next element 
   // $(this).next().toggle();

   // toggle the next element
   $(this).next().slideToggle(400);

});

});
