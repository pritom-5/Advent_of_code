import { readFileSync } from "fs";

const input = readFileSync("./08_input.txt", "utf8");

const inputArr = input.trim().split("\n");

export default inputArr;
