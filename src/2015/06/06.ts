import outputArr from "./06_get_value";

const lightGrid = [];

function makeLightGrid(width: number, height: number): void {
	for (let i = 0; i < height; ++i) {
		lightGrid.push(new Array(height).fill(0));
	}
}

makeLightGrid(1000, 1000);

function breakCommand(command: string) {
	const commandArray = command.split(" ");
	const instraction = commandArray[0];
	const fromString = commandArray[1];
	const fromStringArr = fromString.split(",");
	const fromNumberArr = fromStringArr.map((item) => +item);
	const toString = commandArray[3];
	const toStringArr = toString.split(",");
	const toNumberArr = toStringArr.map((item) => +item);

	return { instraction, from: fromNumberArr, to: toNumberArr };
}

function turnOn(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			lightGrid[i][j] = 1;
		}
	}
}
function turnOff(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			lightGrid[i][j] = 0;
		}
	}
}
function toggle(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			lightGrid[i][j] = lightGrid[i][j] === 0 ? 1 : 0;
		}
	}
}

function updatedTurnOn(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			lightGrid[i][j] = lightGrid[i][j] + 1;
		}
	}
}
function updatedTurnOff(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			if (lightGrid[i][j] !== 0) {
				lightGrid[i][j] = lightGrid[i][j] - 1;
			}
		}
	}
}
function updatedToggle(from: number[], to: number[]): void {
	for (let i = from[1]; i <= to[1]; ++i) {
		for (let j = from[0]; j <= to[0]; ++j) {
			lightGrid[i][j] = lightGrid[i][j] + 2;
		}
	}
}
function controlLights(instraction: string, from: number[], to: number[]) {
	switch (instraction) {
		case "on":
			turnOn(from, to);
			break;
		case "off":
			turnOff(from, to);
			break;
		case "toggle":
			toggle(from, to);
			break;
		default:
			break;
	}
}

function controlLightsUpdated(
	instraction: string,
	from: number[],
	to: number[]
) {
	switch (instraction) {
		case "on":
			updatedTurnOn(from, to);
			break;
		case "off":
			updatedTurnOff(from, to);
			break;
		case "toggle":
			updatedToggle(from, to);
			break;
		default:
			break;
	}
}

function countLight(): number {
	let count = 0;
	for (let i = 0; i < 1000; ++i) {
		lightGrid[i].forEach((item) => {
			if (item === 1) {
				++count;
			}
		});
	}
	return count;
}

function countBrightness(): number {
	let count = 0;
	for (let i = 0; i < 1000; ++i) {
		lightGrid[i].forEach((item) => {
			count += item;
		});
	}
	return count;
}

const test_input = ["on 0,0 through 0,0", "toggle 0,0 through 9,9"];

outputArr.forEach((item) => {
	const { instraction, from, to } = breakCommand(item);
	controlLightsUpdated(instraction, from, to);
});

console.log(countBrightness());
