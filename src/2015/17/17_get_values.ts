import { readFileSync } from "fs";

const input = readFileSync("./17_input_02.txt", "utf8");

const input_arr = input.trim().split("\n");
const input_arr_0 = input_arr.map((item) => Number(item));

function combination(arr: number[], total_limit: number): number[][] {
	const result = [];

	function walk(startIdx: number, curr_combination: number[]): void {
		const total = curr_combination.reduce((acc, curr) => acc + curr, 0);
		// console.log(total, curr_combination);
		if (total === total_limit) {
			result.push([...curr_combination]);
		}

		for (let i = startIdx; i < arr.length; ++i) {
			curr_combination.push(arr[i]);

			walk(i + 1, curr_combination);
			curr_combination.pop();
		}
	}

	walk(0, []);
	return result;
}

const combinations_fill_150 = combination(input_arr_0, 150);

function find_the_minimum_no_of_containers(combinations: number[][]): number {
	const combinations_length_arr = [];

	combinations.forEach((item) => {
		combinations_length_arr.push(item.length);
	});

	return Math.min(...combinations_length_arr);
}

function all_the_combinations_of_minimum_length(
	combinations: number[][]
): number[][] {
	const min_containers = find_the_minimum_no_of_containers(combinations);
	return combinations.filter((item) => item.length === min_containers);
}

console.log(
	all_the_combinations_of_minimum_length(combinations_fill_150).length
);
