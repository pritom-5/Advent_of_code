import { readFileSync } from "fs";

const output = readFileSync("./06_input.txt", "utf8");

const outputArr = output.trim().split("\n");

export default outputArr;
