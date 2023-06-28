import { graph, persons, getPriorityDiff, permutations } from "./13_get_value";

const seatArrangement = permutations(persons);

const difference_arr = [];

for (let arr of seatArrangement) {
	const temp_diff = getPriorityDiff(arr, graph);
	const updated_diff = temp_diff <= 0 ? 0 : temp_diff;
	difference_arr.push(updated_diff);
}

const max_difference = Math.max(...difference_arr);

console.log(max_difference);
