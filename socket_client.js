var net = require("net");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Liittyessäsi keskusteluun, annan ensin nimesi (kirjoita eteen 'nimi'):")

var client = new net.Socket();
client.connect(1337, "127.0.0.1", function () {
  console.log("");
});

rl.on("line", function sendInput(dataOut) {
  client.write(dataOut);
});
client.on("data", function (dataIn) {
  console.log(" "+dataIn);
});
