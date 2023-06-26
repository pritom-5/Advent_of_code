import { readFileSync } from "fs";

const input = readFileSync("./14_input.txt", "utf8");
const input_arr_0 = input.trim().split("\n");
const input_arr_1 = [];
input_arr_0.forEach((item) => {
	const tempSplit = item.split(" ");
	const name = tempSplit[0];
	const speed = +tempSplit[3];
	const flytime = +tempSplit[6];
	const rest = +tempSplit[tempSplit.length - 2];

	input_arr_1.push({ name, speed, flytime, rest, points: 0 });
});

export default input_arr_1;
