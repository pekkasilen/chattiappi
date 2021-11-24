var net = require("net");

var clients = [];
var clientNames = [];
var lastMessage = "";

var server = net.createServer(function (socket) {
  socket.on("data", function (data) {
    if (data.toString().split(" ")[0] === "nimi") {
      var cName = data.toString().split(" ")[1];
      if (!clientNames.includes(cName)) {
        console.log("Added user: " + cName);
        clients.push(socket);
        clientNames.push(cName);
        for (var i = 0; i < clients.length; i++) {
          clients[i].write(cName + " liittyi keskusteluun");
        }
      }
    } else {
      for (var i = 0; i < clients.length; i++) {
        clients[i].write(clientNames[clients.indexOf(socket)] + ":" + data);
      }
    }
  });
});

server.listen(1337, "127.0.0.1");
