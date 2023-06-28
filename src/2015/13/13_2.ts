import { graph, persons } from "./13_get_value";

const all_possible_seating = [];

function bfs(start: string) {
	const q = [];
	const visited = [];

	for (let item of persons) {
		q.push(item);
	}

	while (q.length) {
		const curr = q.shift();
		visited.push(curr);
		const dist = graph[curr];

		for (let item of dist) {
			if (!visited.includes(item.name)) {
				all_possible_seating.push([curr, item.name]);
			}
		}
	}

	return visited;
}

const result = bfs("Alice");
console.log(result);
