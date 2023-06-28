import { graph, persons } from "./13_get_value";

function DFS(graph: any, start: string) {
	const seen = {};
	const seatPlan = [];
	const priority = {};

	for (let person of persons) {
		seen[person] = false;
		priority[person] = 0;
	}

	function sortedArr(arr: any) {
		return arr.sort((a, b) => b.priority - a.priority);
	}

	function walk(node: any) {
		seatPlan.push(node);

		for (let item of sortedArr(graph[node])) {
			if (seatPlan.includes(item.name)) {
				continue;
			} else {
				walk(item.name);
			}
		}

		return seatPlan;
	}

	walk(start);

	return seatPlan;
}

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

		totalDiff += leftPriority + rightPriority;
	});

	return totalDiff;
}

for (let item of persons) {
	const result = DFS(graph, item);
	const priority = getPriorityDiff(result);
	console.log(result, priority);
}
