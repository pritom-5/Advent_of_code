import { readFileSync } from "fs";

const output = readFileSync("./02_input.txt", "utf8");

const outputArr = output.trim().split("\n");
export default outputArr;
