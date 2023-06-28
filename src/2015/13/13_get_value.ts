import { readFileSync } from "fs";

let input = readFileSync("./13_input.txt", "utf8");
input = input.replace(/\./g, "");
const input_arr0 = input.trim().split("\n");
const input_arr_1 = input_arr0.map((item) => {
	return item.split(" ");
});
const input_arr_2 = [];
input_arr_1.map((item) => {
	const tempList = [];
	item.map((item, index) => {
		if (index === 0 || index === 2 || index === 3 || index === 10) {
			tempList.push(item);
		}
	});
	input_arr_2.push(tempList);
});

const persons = [];

input_arr_2.forEach((item) => {
	if (!persons.includes(item[0])) {
		persons.push(item[0]);
	}
	if (!persons.includes(item[3])) {
		persons.push(item[3]);
	}
});

const graph = {};

for (let person of persons) {
	graph[person] = [];
}

for (let person of persons) {
	input_arr_2.forEach((item) => {
		if (item[0] === person) {
			let value;
			if (item[1] === "lose") {
				value = -Number(item[2]);
			} else {
				value = Number(item[2]);
			}
			const temp_object = { name: item[3], priority: value };

			graph[person].push(temp_object);
		}
	});
}

function add_you(name) {
	const updated_graph = [];
	for (let person of persons) {
		graph[person].push({ name: name, priority: 0 });
		updated_graph.push({ name: person, priority: 0 });
	}

	graph[name] = updated_graph;
	persons.push(name);
}
// for part 2
// add_you("you");

function getPriorityDiff(seatPlan: string[], graph: any): number {
	let totalDiff = 0;

	seatPlan.forEach((item, index) => {
		let left;
		let right;
		if (index === 0) {
			left = seatPlan[seatPlan.length - 1];
			right = seatPlan[1];
		} else if (index === seatPlan.length - 1) {
			left = seatPlan[seatPlan.length - 2];
			right = seatPlan[0];
		} else {
			left = seatPlan[index - 1];
			right = seatPlan[index + 1];
		}

		const leftPriority = graph[item].find(
			(item) => item.name === left
		).priority;
		const rightPriority = graph[item].find(
			(item) => item.name === right
		).priority;

		const temp_diff = leftPriority + rightPriority;

		totalDiff += temp_diff;
	});

	return totalDiff;
}

function permutations(arr: string[]): string[][] {
	const result = [];

	function walk(curr: string[], rem: string[]): void {
		if (!rem.length) {
			result.push([...curr]);
			return;
		}

		for (let i = 0; i < rem.length; ++i) {
			curr.push(rem[i]);
			const newRem = rem.slice(0, i).concat(rem.slice(i + 1));

			walk(curr, newRem);
			curr.pop();
		}
	}

	walk([], arr);
	return result;
}

export { graph, persons, getPriorityDiff, permutations };
