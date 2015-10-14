// Arrays - start
	// An array populated with different titles to append in the beginning of the name.
	var title = ['mr', 'mrs', 'ms', 'dr', 'captain', 'scout master', 'cousin', 'secretary', 'chef', 'commander', 'deputy', 'madame', 'lieutenant'];

	// An array populated with various first names from 'Rushmore' to 'The Grand Budapest Hotel'
	var firstName = ['max', 'herman', 'rosemary', 'nelson', 'dirk', 'margaret', 'royal', 'etheline', 'chas', 'margot', 'richie', 'eli', 'raleigh', 'henry', 'pagoda', 'steve', 'ned', 'jane', 'eleanor', 'klaus', 'alistair', 'oseary', 'pele', 'vikram', 'esteban', 'francis', 'peter', 'jack', 'rita', 'patricia', 'ash', 'badger', 'kylie', 'kristofferson', 'franklin', 'rat', 'petey', 'weasel', 'linda', 'walter', 'sam', 'suzy', 'ben', 'lazy-eye', 'deluca', 'izod', 'skotak', 'roosevelt', 'nickleby', 'lionel', 'murray', 'rudy', 'edgar', 'm', 'zero', 'serge', 'dmitri', 'jopling', 'ludwig', 'henckles', 'agatha', 'clotilde', 'otto'];

	// An array populated with various last names from 'Rushmore' to 'The Grand Budapest Hotel'
	var lastName = ['fischer', 'blume', 'cross', 'guggenheim', 'calloway', 'yang', 'tenenbaum', 'cash', 'st. clair', 'sherman', 'zissou', 'plimpton', 'winslett-richardson', 'daimler', 'hennessey', 'drakoulias', 'dos santos', 'ray', 'du plantier', 'fox', 'bean', 'otter', 'boggis', 'sharp', 'ward', 'bishop', 'mcintire', 'pierce', 'gustave', 'moustafa', 'x', 'kovacs', 'ivan', 'jean', 'd', 'chuck', 'mosher', 'martin', 'robin', 'georges', 'dino'];
// Arrays - end


// Ideal output is the code below:
	// (title[Math.floor(Math.random()*title.length)]) + " " + (firstName[Math.floor(Math.random()*firstName.length)]) + " " + (lastName[Math.floor(Math.random()*lastName.length)])


// Random number generated
var randomTitle = Math.floor(Math.random() * title.length);
var randomFirstName = Math.floor(Math.random() * firstName.length);
var randomLastName = Math.floor(Math.random() * lastName.length);

// Compiled name
var fullName = `${title[randomTitle]} ${firstName[randomFirstName]} ${lastName[randomLastName]}`;

// where in array they located
var titlePosition = title.indexOf(title[randomTitle]);
var firstNamePosition = firstName.indexOf(firstName[randomFirstName]);
var lastNamePosition = lastName.indexOf(lastName[randomLastName]);

// Remove from array
firstName.splice(firstNamePosition, 1);
lastName.splice(lastNamePosition, 1);

// console log results
console.log(fullName);
console.log(titlePosition);
console.log(firstNamePosition);
console.log(lastNamePosition);


// Code to Output onto page
document.getElementById('generated-name').innerHTML = fullName;

