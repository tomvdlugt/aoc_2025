import fs from "fs";
import { rotation } from "../days/day01";

export function readLines(path: string): string[]{
  return fs.readFileSync(path, "utf-8").trim().split(/\r?\n/)
}

export function countZeroPasses(start: number, r: rotation): number {
  const amount = r.amount;
  if (amount <= 0) return 0;

  let first: number;

  if (r.dir === "R") {
    first = (100 - start) % 100;
    if (first === 0) first = 100;
  } else {
    first = start % 100;
    if (first === 0) first = 100;
  }

  if (first > amount) return 0;

  const total = 1 + Math.floor((amount - first) / 100);

  // Remove endpoint-crossing if present
  if ((amount - first) % 100 === 0) {
    return total - 1;
  }

  return total;
}
