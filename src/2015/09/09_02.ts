// Create all the possible routes Santa can take
// Calculate total distance form all the routes
// Choose the longest or shortest routes

import { inputObj, cities, allPermutations } from "./09_get_value";

const all_permutations = allPermutations(cities);

const distances = [];

function findTotalDistance(arr: string[]): number {
	let result = 0;
	let startPoint = arr[0];

	for (let i = 1; i < arr.length; ++i) {
		const distance = inputObj[startPoint].find(
			(j) => j.key === arr[i]
		).distance;

		startPoint = arr[i];
		result += distance;
	}

	return result;
}

for (let item of all_permutations) {
	distances.push(findTotalDistance(item));
}

const shortestRoute = Math.min(...distances);
const longestRoute = Math.max(...distances);

console.log(longestRoute);
