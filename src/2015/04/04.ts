const md5 = require("./04_helper.js");
console.log(md5("hello there"));

const CONSTANT = "ckczppom";

function doesStringHaveFive0(value: string): boolean {
	const first5letters = value.slice(0, 6);
	for (let letter of first5letters) {
		if (letter !== "0") {
			return false;
		}
	}
	return true;
}

let i = 0;
while (true) {
	++i;
	const hashValue = md5(`${CONSTANT}${i}`);

	if (doesStringHaveFive0(hashValue)) {
		break;
	}
}

console.log(i);
