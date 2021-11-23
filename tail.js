const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log('✅ ✅ ✅   Assertion passed: {actual} === {expected}');
	} else {
		console.log('🛑 🛑 🛑  Assertion failed: {actual} !== {expected}');
	}
};

const tail = function (array) {
	const outputArray = [];
	for (let index = 1; index < array.length; index++) {
		const element = array[index];
		outputArray.push(element);
	}

	return outputArray;
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.toString(), ['Lighthouse', 'Labs'].toString());

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // No need to capture the return value since we are not checking it
assertEqual(words.length, 3);
