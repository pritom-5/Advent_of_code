import outputArr from "./02_get_value";

function surfacearea(length: number, width: number, height: number): number {
	return 2 * length * width + 2 * width * height + 2 * height * length;
}

function smallestSurfaceArea(
	length: number,
	width: number,
	height: number
): number {
	const surface_01 = length * width;
	const surface_02 = width * height;
	const surface_03 = height * length;

	return Math.min(surface_01, surface_02, surface_03);
}

function findSmallestPerimeter(
	length: number,
	width: number,
	height: number
): number {
	const sortedDimensionArr = [length, width, height].sort((a, b) => a - b);
	return 2 * (sortedDimensionArr[0] + sortedDimensionArr[1]);
}

function findCubeOfBox(length: number, width: number, height: number): number {
	return length * height * width;
}

function convertStringToNumberArr(dimension: string): number[] {
	const dimensionArr = dimension.split("x");
	const dimensionArrNumber = dimensionArr.map((item) => +item);

	return dimensionArrNumber;
}

function findTotalWrapper(dimension: string) {
	const dimensionArrNumber = convertStringToNumberArr(dimension);
	const length = dimensionArrNumber[0];
	const width = dimensionArrNumber[1];
	const height = dimensionArrNumber[2];

	return (
		surfacearea(length, width, height) +
		smallestSurfaceArea(length, width, height)
	);
}

function findTotalRibbon(dimension: string): number {
	const dimensionArrNumber = convertStringToNumberArr(dimension);
	const length = dimensionArrNumber[0];
	const width = dimensionArrNumber[1];
	const height = dimensionArrNumber[2];

	return (
		findSmallestPerimeter(length, width, height) +
		findCubeOfBox(length, width, height)
	);
}

// const inputs = ["2x3x4", "1x1x10"];
// const results = [];
// inputs.forEach((item) => results.push(findTotalWrapper(item)));

// console.log(results);

let totalWrapper = 0;
let totalRibbon = 0;

outputArr.forEach((item) => {
	totalWrapper += findTotalWrapper(item);
	totalRibbon += findTotalRibbon(item);
});

console.log(`totalWrapper: ${totalWrapper} | totalRibbon: ${totalRibbon}`);
