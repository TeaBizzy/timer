const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
  console.log("Thanks for using me, ciao")
  process.exit();
  }

  // play beep
  if(key === "b") {
    process.stdout.write("\007");
  }

  if(Number(key) >= 1 || Number(key) <= 9) {
    createTimer(Number(key))
  }
});

const createTimer = function(duration) {
  console.log(`setting timer for ${duration} seconds...`)
  setTimeout(() => process.stdout.write("\007"), duration * 1000);
};