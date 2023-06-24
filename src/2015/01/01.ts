import output from "./01_get_value";

const sign = {
	"(": 1,
	")": -1,
};

const testText = [
	"(())",
	"()()",
	"(((",
	"(()(()(",
	"))(((((",
	"())",
	"))(",
	")))",
	")())())",
];

// let finalResultArr = [];

// testText.forEach((text) => {
// 	let finalResult = 0;
// 	for (let item of text) {
// 		finalResult += sign[item];
// 	}
// 	finalResultArr.push(finalResult);
// });

let finalResult = 0;
let characterCount = 0;

for (let item of output) {
	++characterCount;
	finalResult += sign[item];
	if (finalResult === -1) break;
}

console.log(finalResult, characterCount);
