function displayMessage(arg) {
  console.log = process.stdout.write(`${arg}\n`);
}

module.exports = displayMessage;
