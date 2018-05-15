let prefix = ['mr.', 'mrs.', 'ms.', 'dr.', 'm.', 'captain', 'scout master', 'cousin', 'secretary', 'chef', 'commander', 'deputy', 'madame', 'lieutenant', 'mayor', 'major', 'interpreter', 'professor', 'assistant-scientist', 'editor'];

let firstName = ['anthony', 'dignan', 'future man', 'max', 'herman', 'rosemary', 'nelson', 'dirk', 'margaret', 'royal', 'etheline', 'chas', 'margot', 'richie', 'eli', 'raleigh', 'henry', 'pagoda', 'steve', 'ned', 'jane', 'eleanor', 'klaus', 'alistair', 'oseary', 'pele', 'vikram', 'esteban', 'francis', 'peter', 'jack', 'rita', 'patricia', 'ash', 'badger', 'kylie', 'kristofferson', 'franklin', 'rat', 'petey', 'weasel', 'linda', 'walter', 'sam', 'suzy', 'ben', 'lazy-eye', 'deluca', 'izod', 'skotak', 'roosevelt', 'nickleby', 'lionel', 'murray', 'rudy', 'edgar', 'm', 'zero', 'serge', 'dmitri', 'jopling', 'ludwig', 'henckles', 'agatha', 'clotilde', 'otto', 'chief', 'atari', 'rex', 'king', 'boss', 'duke', 'tracy', 'nutmeg', 'gondo', 'jupiter', 'oracle', 'spots', 'igor', 'peppermint', 'jack', 'jed', 'ralph', 'fritz'];

let lastName = ['adams', 'fischer', 'blume', 'cross', 'guggenheim', 'calloway', 'yang', 'tenenbaum', 'cash', 'st. clair', 'sherman', 'zissou', 'plimpton', 'winslett-richardson', 'daimler', 'hennessey', 'drakoulias', 'dos santos', 'ray', 'du plantier', 'fox', 'bean', 'otter', 'boggis', 'sharp', 'ward', 'bishop', 'mcintire', 'pierce', 'gustave', 'moustafa', 'x', 'kovacs', 'ivan', 'jean', 'd', 'chuck', 'mosher', 'martin', 'robin', 'georges', 'dino', 'kobayashi', 'domo', 'walker', 'nelson', 'watanabe', 'yoko-ono', 'hiroshi', 'whitman', 'cavalcanti'];

let colorScheme = ['bottle-rocket','rushmore','the-royal-tenembaums', 'life-aquatic-with-steve-zissou', 'darjeeling-limited', 'fantastic-mr-fox', 'moonrise-kingdom', 'the-grand-budapest-hotel', 'isle-of-dogs'];

let random = function(arrayName){
	let number = arrayName.length;
	let random = Math.floor(Math.random() * number);
	return arrayName[random];
}

$(document).ready(function() {
	$('body').addClass( random(colorScheme) );
	$('.generate').click(function(){
		let fullName = `${random(prefix)} ${random(firstName)} ${random(lastName)}`;
		$('#generatedName').html(fullName);
	});
});
