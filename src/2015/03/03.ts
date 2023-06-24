import output from "./03_get_value";

const sign = {
	"^": [0, 1],
	v: [0, -1],
	">": [1, 0],
	"<": [-1, 0],
};

let houses = { 0: [0] };
let lastPosition = [0, 0];

const inputs = [">", "^>v<", "^v^v^v^v^v"];

function updateHouses(input: string): void {
	const move = sign[input];
	const updatedRowNo = lastPosition[1] + move[1];
	const updatedHouseNo = lastPosition[0] + move[0];

	if (!!houses[updatedRowNo]) {
		const houseAlreadyExists =
			houses[updatedRowNo].includes(updatedHouseNo);
		if (!houseAlreadyExists) {
			houses[updatedRowNo] = [...houses[updatedRowNo], updatedHouseNo];
		}
	} else {
		houses[updatedRowNo] = [updatedHouseNo];
	}

	lastPosition = [updatedHouseNo, updatedRowNo];
}

function countHouses(): number {
	let houseCount = 0;
	for (let row in houses) {
		houseCount += houses[row].length;
	}

	return houseCount;
}

//------------TEST---------
// inputs.forEach((item, index) => {
// 	houses = { 0: [0] };
// 	lastPosition = [0, 0];
// 	for (let i of item) {
// 		updateHouses(i);
// 	}

// 	console.log(houses, countHouses());
// });

// santa odd; robo even

let j = 0;
for (let i of output.trim()) {
	++j;
	if (j % 2 === 0) {
		updateHouses(i);
	}
}

let k = 0;
lastPosition = [0, 0];
for (let i of output.trim()) {
	++k;
	if (k % 2 !== 0) {
		updateHouses(i);
	}
}

console.log(countHouses());
