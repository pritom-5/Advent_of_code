import input_arr_1 from "./14_get_value";

function totalDistance(
	time: number,
	speed: number,
	flytime: number,
	rest: number
) {
	const chunkLength = flytime + rest;
	const distanceInOneFly = speed * flytime;
	const mod = time % chunkLength;
	if (mod === 0) {
		return (time / chunkLength) * distanceInOneFly;
	} else if (mod > flytime) {
		return (
			((time - mod) / chunkLength) * distanceInOneFly + distanceInOneFly
		);
	} else {
		return ((time - mod) / chunkLength) * distanceInOneFly + speed * mod;
	}
}

const leaderBoard = {} as { [key: string]: number };
const input_arr_2 = [...input_arr_1];

function getMaxValue() {
	const maxValue = Math.max(...Object.values(leaderBoard));
	return maxValue;
}

function givePoints() {
	const maxValue = getMaxValue();
	for (let [key, value] of Object.entries(leaderBoard)) {
		if (value === maxValue) {
			input_arr_1.find((item) => item.name === key).points += 1;
		}
	}
}

function runRace() {
	for (let time = 1; time <= 2503; ++time) {
		for (let rider of input_arr_1) {
			const { name, speed, flytime, rest, points } = rider;
			const temp_distance = totalDistance(time, speed, flytime, rest);
			leaderBoard[name] = temp_distance;
		}
		console.log(leaderBoard);

		givePoints();
	}
}

const time = 2503;
const input_values = [
	[14, 10, 127],
	[16, 11, 162],
];

runRace();

// input_arr_1.map((item) => {
// 	const { flytime, speed, rest } = item;
// 	console.log(totalDistance(time, speed, flytime, rest));
// });

console.log(input_arr_2);
