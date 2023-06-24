import inputArr from "./05_get_values";

const VOWELS = ["a", "e", "i", "o", "u"];
function hasAtLeastThreeVowels(text: string): boolean {
	let vowelCount = 0;
	for (let letter of text) {
		if (VOWELS.includes(letter)) {
			++vowelCount;
		}
	}

	return vowelCount >= 3;
}

function containsRepeatedLetters(text: string): boolean {
	for (let i = 0; i < text.length - 1; ++i) {
		const currentLetter = text[i];
		const nextLetter = text[i + 1];

		if (currentLetter === nextLetter) {
			return true;
		}
	}

	return false;
}

const SPECIAL_DUO = ["ab", "cd", "pq", "xy"];

function notContainSpecialDuo(text: string): boolean {
	let left = 0;
	let right = 2;
	for (let i = 0; i < text.length - 1; ++i) {
		const slice = text.slice(left, right);
		++left;
		++right;

		// console.log("slice", slice);

		if (SPECIAL_DUO.includes(slice)) {
			return false;
		}
	}

	return true;
}

function hasAtLeastTwoRepeatingPair(text: string): boolean {
	// ---------------------- PROBLEM -----------------
	// This one causes but for YYY instances. shows two pairs
	//
	// const pairsObj = {} as { [key: string]: number };

	// for (let i = 0; i < text.length - 1; ++i) {
	// 	const slice = text.slice(i, i + 2);
	// 	if (pairsObj[slice]) {
	// 		pairsObj[slice] = ++pairsObj[slice];
	// 	} else {
	// 		pairsObj[slice] = 1;
	// 	}
	// }

	// for (let [key, value] of Object.entries(pairsObj)) {
	// 	if (value > 1) {
	// 		console.log(text, key);
	// 		return true;
	// 	}
	// }
	//
	// ---------------------------

	for (let i = 0; i < text.length - 1; ++i) {
		const slice = text.slice(i, i + 2);
		const remainingSlice = text.slice(i + 2);

		if (remainingSlice.includes(slice)) {
			return true;
		}
	}

	return false;
}

function hasRepeatingLetterAfterOneLetter(text: string): boolean {
	for (let i = 0; i < text.length - 2; ++i) {
		const currentLetter = text[i];
		const possibleRepeat = text[i + 2];

		if (currentLetter === possibleRepeat) {
			return true;
		}
	}

	return false;
}

const inputs = [
	"ugknbfddgicrmopn",
	"aaa",
	"jchzalrnumimnmhp",
	"haegwjzuvuyypxyu",
	"dvszwmarrgswjxmb",
];

const inputs_02 = [
	"qjhvhtzxzqqjkmpb",
	"xxyxx",
	"uurcxstgmygtbstg",
	"ieodomkazucvgmuy",
];

let validWordCount = 0;

inputArr.forEach((item) => {
	console.log("-----------", item, "-----------");
	console.log("hasAtLeastThreeVowels", hasAtLeastThreeVowels(item));
	console.log("containsRepeatedLetters", containsRepeatedLetters(item));
	console.log("notContainSpecialDuo", notContainSpecialDuo(item));

	if (
		hasAtLeastThreeVowels(item) &&
		containsRepeatedLetters(item) &&
		notContainSpecialDuo(item)
	) {
		++validWordCount;
	}
});

let validWordCount_02 = 0;
inputArr.forEach((item) => {
	if (
		hasAtLeastTwoRepeatingPair(item.trim()) &&
		hasRepeatingLetterAfterOneLetter(item.trim())
	) {
		++validWordCount_02;
	}
});

console.log(validWordCount_02);
