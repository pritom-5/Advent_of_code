// walk word
// check for slash
//		check next character
//			\ -> replace both slash with one slash
//			x -> replace four character with one
//			" -> replace \" with character
//

import inputArr from "./08_get_values";

function trimString(input: string): string {
	let count = 0;
	let returnInput = input;

	const hexRegex = /\\x(\w|\d){2}/g;
	const slashRegex = /\\\\/g;
	const slashRegex_01 = /\\/g;
	const quoteRegex = /\\"/g;
	const finalQuoteRegex = /"/g;

	returnInput = returnInput
		.replace(slashRegex, "S")
		.replace(hexRegex, "R")
		.replace(quoteRegex, "C")
		.replace(finalQuoteRegex, "");

	// console.log(input, `updatedText: ${returnInput}`);
	return returnInput;
}

let stringLength = 0;
let trimStringLength = 0;
function control(input: string) {
	const realStringLength = input.length;
	const updatedString = trimString(input).trim();

	stringLength += realStringLength;
	trimStringLength += updatedString.length;

	console.log(`${input} | ${updatedString}`);
}

function padString(input: string): string {
	let returnInput = input;

	const quoteRegex = /\\"/g;
	const hexRegex = /\\x(\d|\w){2}/g;
	const quoteRegex_0 = /"/g;
	const slashRegex = /\\/g;

	returnInput = "CSC" + returnInput.slice(1, returnInput.length - 1) + "SCC";

	returnInput = returnInput
		.replace(quoteRegex, "SSSC")
		.replace(hexRegex, "SSxHH")
		.replace(slashRegex, "SS");

	console.log(returnInput);
	return returnInput;
}

let originalCount = 0;
let updatedStringCount = 0;
function control_02(input: string): void {
	originalCount += input.length;
	const updatedString = padString(input);

	updatedStringCount += updatedString.length;
}

inputArr.forEach((item) => {
	control_02(item);
});

const difference = stringLength - trimStringLength;
const difference_02 = updatedStringCount - originalCount;

console.log(difference_02);
