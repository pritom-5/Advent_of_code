const letterArr = [];

for (let i = 97; i <= 122; ++i) {
	const letter = String.fromCharCode(i);
	letterArr.push(letter);
	console.log(letter);
}

const threeLetterPack = [];

for (let i = 0; i <= 23; ++i) {
	const packArr = letterArr.slice(i, i + 3);
	const pack = packArr.join("");
	threeLetterPack.push(pack);
}

console.log(letterArr, threeLetterPack);

export { letterArr, threeLetterPack };
