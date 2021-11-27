let assertEqual = function (actual, expected) {
	if (actual === expected) {
		return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
	}

	return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

let findKey = function (obj, callback) {
	for (let key in obj) {
		if (callback(obj[key])) {
			return key;
		}
	}
};

let r1 = (findKey(
	{
		'Blue Hill': {stars: 1},
		Akaleri: {stars: 3},
		noma: {stars: 2},
		elBulli: {stars: 3},
		Ora: {stars: 2},
		Akelarre: {stars: 5},
	}, x => x.stars === 5));

let r2 = (findKey(
	{
		sci_fi: 'The Expanse',
		comedy: 'Brooklyn Nine-Nine',
		drama: 'The Wire',
	}, x => x === 'The Wire'));

let r3 = (findKey(
	{
		'Blue Hill': {stars: 1},
		Akaleri: {stars: 3},
		noma: {stars: 2},
		elBulli: {stars: 3},
		Ora: {stars: 2},
		Akelarre: {stars: 3},
	}, x => x.stars === 10));

assertEqual(r1, 'Akelarre');
assertEqual(r2, 'drama');
assertEqual(r3, undefined);
