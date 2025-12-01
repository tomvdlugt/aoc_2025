import {countZeroPasses, readLines} from "../../helpers/helpers"
import path from "path";

const inputPath = path.join(__dirname, "input1.txt");

export type rotation= {
  dir: "L" | "R"
  amount: number;
}

function parseRotation(line: string){
  const dir = line[0];
  const amountStr = line.slice(1);
  const amount = Number(amountStr);

  return {dir: dir as "L" | "R", amount}
}

function rotate(current: number, r: rotation): number {
  const delta = r.dir === "L" ? -r.amount : r.amount;
  let next = (current + delta) % 100;
  if (next < 0) next += 100;
  return next;
}

export function main(){
  // === Part 1 ===
  console.log("index.ts loaded");
  console.log("main is", typeof main);

  const lines = readLines(inputPath);
  const rotations = lines.map(parseRotation);

  let pos = 50;
  let zeroCount = 0;

  for(const r of rotations){
    pos = rotate(pos, r);
    if (pos === 0) zeroCount++;
  }

  console.log("part 1: " + zeroCount)

  // === part 2 ===

  let pos2 = 50;
  let zeroCount2 = 0;

  for(const r of rotations){
    zeroCount2 += countZeroPasses(pos2, r)
    pos2 = rotate(pos2, r)
    if (pos2 === 0) zeroCount2 ++
  }

  console.log("part 2:", zeroCount2);
}
