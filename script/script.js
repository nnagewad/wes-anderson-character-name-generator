// Arrays - start
	// An array populated with different titles to append in the beginning of the name.
	var prefix = ['mr', 'mrs', 'ms', 'dr', 'captain', 'scout master', 'cousin', 'secretary', 'chef', 'commander', 'deputy', 'madame', 'lieutenant'];

	// An array populated with various first names from 'Bottle Rocket' to 'The Grand Budapest Hotel'
	var firstName = ['anthony', 'dignan', 'future man', 'max', 'herman', 'rosemary', 'nelson', 'dirk', 'margaret', 'royal', 'etheline', 'chas', 'margot', 'richie', 'eli', 'raleigh', 'henry', 'pagoda', 'steve', 'ned', 'jane', 'eleanor', 'klaus', 'alistair', 'oseary', 'pele', 'vikram', 'esteban', 'francis', 'peter', 'jack', 'rita', 'patricia', 'ash', 'badger', 'kylie', 'kristofferson', 'franklin', 'rat', 'petey', 'weasel', 'linda', 'walter', 'sam', 'suzy', 'ben', 'lazy-eye', 'deluca', 'izod', 'skotak', 'roosevelt', 'nickleby', 'lionel', 'murray', 'rudy', 'edgar', 'm', 'zero', 'serge', 'dmitri', 'jopling', 'ludwig', 'henckles', 'agatha', 'clotilde', 'otto'];

	// An array populated with various last names from 'Bottle Rocket' to 'The Grand Budapest Hotel'
	var lastName = ['adams', 'fischer', 'blume', 'cross', 'guggenheim', 'calloway', 'yang', 'tenenbaum', 'cash', 'st. clair', 'sherman', 'zissou', 'plimpton', 'winslett-richardson', 'daimler', 'hennessey', 'drakoulias', 'dos santos', 'ray', 'du plantier', 'fox', 'bean', 'otter', 'boggis', 'sharp', 'ward', 'bishop', 'mcintire', 'pierce', 'gustave', 'moustafa', 'x', 'kovacs', 'ivan', 'jean', 'd', 'chuck', 'mosher', 'martin', 'robin', 'georges', 'dino'];

	var quote = [
		'<q>On the run from Johnny Law... ain\'t no trip to Cleveland.</q> <cite>Dignan (Bottle Rocket, 1996)</cite>',
		'<q>They\'ll never catch me... because I\'m fucking innocent.</q> <cite>Dignan (Bottle Rocket, 1996)</cite>',
		'<q>I don\'t think your happiness is quite appropriate.</q> <cite>Anthony (Bottle Rocket, 1996)</cite>',
		'<q>You\'re calling me a bully? Here\'s a bully for you!</q> <cite>Future Man (Bottle Rocket, 1996)</cite>',
		'<q>Here are just a few of the key ingredients: dynamite, pole vaulting, laughing gas, choppers - can you see how incredible this is going to be? - hang gliding, come on!</q> <cite>Dignan (Bottle Rocket, 1996)</cite>',
		'<q>Dear Max, I am sorry to say that I have secretly found out that Mr. Blume is having an affair with Miss Cross. My first suspicions came when I saw them Frenching in front of our house. And then I knew for sure when they went skinny dipping in Mr. Blume\'s swimming pool, giving each other handjobs while you were taking a nap on the front porch.</q> <cite>Dirk Calloway (Rushmore, 1998)</cite>',
		'<q>You guys have it real easy. I never had it like this where I grew up. But I send my kids here because the fact is you go to one of the best schools in the country: Rushmore. Now, for some of you it doesn\'t matter. You were born rich and you\'re going to stay rich. But here\'s my advice to the rest of you: Take dead aim on the rich boys. Get them in the crosshairs and take them down. Just remember, they can buy anything but they can\'t buy backbone. Don\'t let them forget it. Thank you.</q> <cite>Herman Blume (Rushmore, 1998)</cite>',
		'<q>My top schools where I want to apply to are Oxford and the Sorbonne. My safety\'s Harvard.</q> <cite>Max Fischer (Rushmore, 1998)</cite>',
		'<q>I saved Latin. What did you ever do?</q> <cite>Max Fischer (Rushmore, 1998)</cite>',
		'<q>Maybe I\'m spending too much of my time starting up clubs and putting on plays. I should probably be trying harder to score chicks.</q> <cite>Max Fischer (Rushmore, 1998)</cite>',
		'<q>Why would a reviewer make the point of saying someone\'s <em>not</em> a genius? Do you especially think I\'m <em>not</em> a genius? You didn\'t even have to think about it, did you?</q> <cite>Eli Cash (The Royal Tenenbaums, 2001)</cite>',
		'<q>That\'s the last time you put a knife in me! Y\'hear me?</q> <cite>Royal Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>I\'ve always been considered an asshole for about as long as I can remember. That\’s just my style.</q> <cite>Royal Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>Hell of a damn grave. Wish it were mine.</q> <cite>Royal Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>Anybody interested in grabbing a couple of burgers and hittin\' the cemetery?</q> <cite>Royal Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>I\'m very sorry for your loss. Your mother was a terribly attractive woman.</q> <cite>Royal Tenenbaum (The Royal Tenenbaums. 2001)</cite>',
		'<q>Let\'s shag ass.</q> <cite>Royal Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>Four minutes, forty-eight seconds. We\'re all dead. Burned to a crips.</q> <cite>Chas Tenenbaum (The Royal Tenenbaums, 2001)</cite>',
		'<q>Son of a bitch, I\'m sick of these dolphins.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Don\'t point that gun at him, he\'s an unpaid intern.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Oh, shit! Swamp leeches. Everybody, check for swamp leeches, and pull them off... Nobody else got hit? I\'m the only one? What\'s the deal?</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Now if you\'ll excuse me, I\'m going to go on an overnight drunk, and in 10 days I\'m going to set out to find the shark that ate my friend and destroy it. Anyone who wants to tag along is more than welcome.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>I\'m going to find it and I\'m going to destroy it. I don\'t know how yet. Possibly with dynamite.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Wolodarsky, go get the keys to that fishing boat, and throw them in the water. No, wait. They might have another set. Just blow it up.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Supposedly Cousteau and his cronies invented the idea of putting walkie-talkies into the helmet. But we made ours with a special rabbit ear on the top so we could pipe in some music.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>We\'ve never made great husbands, have we? Of course, I have a good excuse. I\'m part gay.</q> <cite>Alistair Hennessey (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>Please don\'t make fun of me. I just wanted to flirt with you.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>I\'m so pissed I want to spit!</q> <cite>Alistair Hennessey (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>If we don\'t handle this right, we\'re gonna all get murdered... including her unborn British child.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>You know I\'m not good at apologizing, so I\'ll just skip it if it\'s all the same to you.</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>You really think it\'s cool for you to hit the sauce with a bun in the oven?</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>That pregnant slut is playing us like a cheap fiddle!</q> <cite>Steve Zissou (The Life Aquatic with Steve Zissou, 2004)</cite>',
		'<q>He has this disease where his head is shaved except he doesn\'t have to shave it because he can\'t grow any hair in the first place. Don\'t talk about it around him though. It might offend him.</q> <cite>Francis (The Darjeeling Limited, 2007)</cite>',
		'<q>Fuck the itinerary.</q> <cite>Peter (The Darjeeling Limited, 2007)</cite>',
		'<q>There\'s a lot of attitudes going on around here... don\'t let me get one.</q> <cite>Ash (Fantastic Mr. Fox, 2009)</cite>',
		'<q>There\'s a lot of attitudes going on around here... don\'t let me get one.</q> <cite>Mr. Fox (Fantastic Mr. Fox, 2009)</cite>',
		'<q>Excuse me? Am I being flirted with by a psychotic rat?</q> <cite>Mrs. Fox (Fantastic Mr. Fox, 2009)</cite>',
		'<q>Jiminy cricket, he flew the coop!</q> <cite>Scout Master Ward (Moonrise Kingdom, 2012)</cite>',
		'<q>It\'s been proven by history: all mankind makes mistakes.</q> <cite>Captain Sharp (Moonrise Kingdom, 2012)</cite>',
		'<q>I\’m not that strong of a swimmer, so I wear a life-preserver. I think it\’s a good policy to get in the habit, anyway.</q> <cite>Sam (Moonrise Kingdom, 2012)</cite>',
		'<q>You see, there are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity. Indeed that\'s what we provide in our own modest, humble, insignificant... oh, fuck it.</q> <cite>M. Gustave (The Grand Budapest Hotel, 2014)</cite>',
		'<q>You\'re looking so well, darling, you really are... they\'ve done a marvelous job. I don\'t know what sort of cream they\'ve put on you down at the morgue, but... I want some.</q> <cite>M. Gustave (The Grand Budapest Hotel, 2014)</cite>',
		'<q>If I die first, and I almost certainly will, you will be my sole heir. There\'s not much in the kitty, except a set of ivory-backed hairbrushes and my library of romantic poetry, but when the time comes, these will be yours. Along with whatever we haven\'t already spent on whores and whiskey.</q> <cite>M. Gustave (The Grand Budapest Hotel, 2014)</cite>'
	]

	var colorScheme = ['bottle-rocket','rushmore','the-royal-tenembaums', 'life-aquatic-with-steve-zissou', 'darjeeling-limited', 'fantastic-mr-fox', 'moonrise-kingdom', 'the-grand-budapest-hotel'];
// Arrays - end


// Random Number Generator
var random = function(arrayName){
	var number = arrayName.length;
	var random = Math.floor(Math.random() * number);
	return arrayName[random];
}

$( document ).ready(function() {
	// On Page Load, load color scheme at random
	$( "body" ).addClass( random(colorScheme) );
	// When user clicks on the button
	$('.generate').click(function(){
		// Remove the item for the firstName array
		var removeFirstName = firstName.splice(firstName.indexOf(random(firstName)), 1);
		// Remove the item for the lastName array
		var removeLastName = lastName.splice(lastName.indexOf(random(lastName)), 1);
		// Concatenate the prefix, first name and last name.
		var fullName = random(prefix) + " " + removeFirstName + " " + removeLastName;
		// Print results on DOM
		$('#generatedName').html(fullName);
		// Check if the array is empty and print something from var finish
		if (lastName.length === 0 || firstName.length === 0) {
			// Remove generated name
			$('#generatedName').remove();
			// Print from the finish array
			$('#quotes').html(random(quote));
		}
	});
});
