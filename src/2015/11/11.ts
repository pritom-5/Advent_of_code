import { letterArr, threeLetterPack } from "./11_helper";

function hasIncreasingLetters(password: string): boolean {
	for (let item of threeLetterPack) {
		if (password.includes(item)) {
			return true;
		}
	}
	return false;
}

function doesntHaveIOL(password: string): boolean {
	const letters = ["i", "o", "l"];
	for (let item of letters) {
		if (password.includes(item)) {
			return false;
		}
	}

	return true;
}

function haveTwoRepeatingLetters(password: string): boolean {
	let repeatCount = 0;
	for (let i = 0; i < password.length - 1; ++i) {
		if (password[i] === password[i + 1]) {
			++repeatCount;
			password = password.replace(password.slice(i, i + 2), "12");
		}
	}

	if (repeatCount >= 2) {
		return true;
	} else {
		return false;
	}
}

function isPasswordValid(password: string): boolean {
	return (
		hasIncreasingLetters(password) &&
		doesntHaveIOL(password) &&
		haveTwoRepeatingLetters(password)
	);
}

function findLetterIndex(letter: string): number {
	return letterArr.indexOf(letter);
}

function updateLetter(letterIndex: number): string {
	const nextLetterIndex = letterIndex + 1;
	const nextLetter = letterArr[nextLetterIndex];
	return nextLetter;
}

function hasReachedEnd(letterIndex: number): boolean {
	return letterIndex === 25;
}

function passwordGenerator(oldPassword: string): string {
	let newPasswordArr = oldPassword.split("");
	let pointer = newPasswordArr.length - 1;

	let tryCount = 0;

	while (true) {
		++tryCount;

		// skipping the first one as password can be already valid
		if (isPasswordValid(newPasswordArr.join("")) && tryCount !== 1) {
			break;
		}

		const letter = newPasswordArr[pointer];
		const letterIndex = findLetterIndex(letter);

		// go to previous clog after resetting letter
		if (hasReachedEnd(letterIndex)) {
			newPasswordArr[pointer] = letterArr[0];
			--pointer;
		} else {
			// normal update to next letter
			const nextLetter = updateLetter(letterIndex);
			newPasswordArr[pointer] = nextLetter;

			// pointer reset
			if (
				!hasReachedEnd(letterIndex) &&
				pointer !== newPasswordArr.length - 1
			) {
				pointer = newPasswordArr.length - 1;
			}
		}
	}

	return newPasswordArr.join("");
}

console.log(passwordGenerator("hxbxxyzz"));

// const inputs = ["hijklmmn", "abbceffg", "abbcegjk"];

// inputs.forEach((item) => {
// 	console.log(`-------${item}--------`);
// 	console.log(`increasingLetters: ${hasIncreasingLetters(item)}`);
// 	console.log(`doesntHaveIOL: ${doesntHaveIOL(item)}`);
// 	console.log(`haveTwoRepeatingLetters: ${haveTwoRepeatingLetters(item)}`);
// });
