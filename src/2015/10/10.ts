// [1, 1], [2, 1], [[1, 2], [2, 1]]
let count = 0;
function numberOfNumber(input: string) {
	++count;

	const arr = [];
	let prevLetter = null;
	let arrIndexCount = -1;
	for (let letter of input) {
		if (prevLetter === null) {
			prevLetter = letter;
			arr.push([1, letter]);
			++arrIndexCount;
			continue;
		}
		if (prevLetter === letter) {
			++arr[arrIndexCount][0];
			continue;
		}

		if (prevLetter !== letter) {
			prevLetter = letter;
			arr.push([1, letter]);
			++arrIndexCount;
		}
	}

	const result = arr.flat().join("");

	// Base case
	if (count === 50) {
		console.log(result.length);
		return result;
	}

	// recurse the function
	numberOfNumber(result);
}

const inputs = [1, 11, 21, 1211, 111221];

// inputs.forEach((item) => {
// 	const result = numberOfNumber(item);
// 	console.log(item, "result: ", result);
// });

const input = 1321131112;

const result = numberOfNumber(String(input));
console.log(result);
