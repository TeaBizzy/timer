const args = process.argv.slice(2);

console.log(args);

const createTimers = function() {
  if (args.length === 0) {
    return;
  }

  for (const argument of args) {
    let timer = Number(argument);
    if (isNaN(timer) || timer <= 0) {
      console.log(`${argument} is not a valid number!`);
      continue;
    }
    timer *= 1000;
    setTimeout(() => process.stdout.write("\007"), timer);
  }
};

createTimers();