import { readFileSync } from "fs";

const input = readFileSync("./05_input.txt", "utf8");

const inputArr = input.trim().split("\n");

export default inputArr;
