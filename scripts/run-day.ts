import path from "path";

async function run() {
  const day = Number(process.argv[2]);
  const zeroPaddedDay = String(day).padStart(2, "0");
  const filePath = path.resolve(`./src/days/day${zeroPaddedDay}/index.ts`);

  console.log("Trying to import:", filePath);

  let mod;
  try {
    mod = require(filePath);
  } catch (err) {
    console.log(`day ${zeroPaddedDay} not implemented`);
    return;
  }

  if (typeof mod.main !== "function") {
    console.log("export doesnt exist");
    return;
  }

  mod.main();
}

run();
