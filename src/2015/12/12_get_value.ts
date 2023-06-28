import { readFileSync } from "fs";

const input = readFileSync("./12_input.txt", "utf8");

function numberSum(text_value: string) {
	const regex = /-?\d+/g;
	const valuesArr = text_value.match(regex);
	let result = 0;
	for (let i of valuesArr) {
		result += Number(i);
	}

	return result;
}

let input_0 = input;
function removeObjWithRed() {
	let slice_start = 0;
	while (true) {
		let reset = false;
		const redIndex = input_0.slice(slice_start).indexOf("red");

		console.log(redIndex);

		if (redIndex === -1) {
			break;
		}

		let leftIndex = redIndex;
		let rightIndex = redIndex;

		while (input_0[rightIndex] !== "}") {
			if (input_0[rightIndex] === "]") {
				reset = true;
				break;
			}
			++rightIndex;
		}

		if (reset) {
			continue;
		}

		while (input_0[leftIndex] !== "{") {
			--leftIndex;
		}

		console.log("--------------------------------------");
		console.log(input_0.slice(leftIndex, rightIndex + 1));
		console.log("--------------------------------------");

		input_0 = input_0.replace(
			input_0.slice(leftIndex, rightIndex + 1),
			"R"
		);
	}
}

console.log(numberSum(input_0));
