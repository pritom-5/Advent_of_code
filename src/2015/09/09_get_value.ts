import { readFileSync } from "fs";

const input = readFileSync("./09_text_input_02.txt", "utf8");

const inputObj = {};

const inputArr = input.trim().split("\n");
const inputArr_0 = [];
inputArr.forEach((item) => {
	const placeDistance = item.split(" = ");
	const places = placeDistance[0].split(" to ");
	inputArr_0.push([...places, +placeDistance[1]]);
});

const cities = [];

for (let item of inputArr_0) {
	for (let city of item) {
		if (typeof city === "string") {
			if (!cities.includes(city)) {
				cities.push(city);
			}
		}
	}
}

for (let city of cities) {
	inputObj[city] = [];
}

for (let city of cities) {
	for (let item of inputArr_0) {
		if (item.includes(city)) {
			for (let value of item) {
				if (typeof value === "string" && value !== city) {
					inputObj[city].push({ key: value, distance: item[2] });
				}
			}
		}
	}
}

function allPermutations<T>(arr: T[]): T[][] {
	const result = [];

	function walk(curr: T[], remaining: T[]) {
		if (!remaining.length) {
			result.push([...curr]);
			return;
		}

		for (let i = 0; i < remaining.length; ++i) {
			curr.push(remaining[i]);
			const newRemaining = remaining
				.slice(0, i)
				.concat(remaining.slice(i + 1));
			walk(curr, newRemaining);
			curr.pop();
		}
	}

	walk([], arr);

	return result;
}

export { inputObj, cities, allPermutations };
