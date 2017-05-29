import { io } from "socket.io"

modules.exports = [];

document.body.onload = function () {
  
  document.getElementById("textbox").onsubmit = function (e) {
    var elem = (<HTMLInputElement>document.getElementById("m"));
    var msg = elem.value;
    io().emit('chat message', msg);
    msg = "";
    e.preventDefault();
    console.log("send");
  };

  io().on('chat message', function(msg) {
    var node : HTMLElement = document.createElement("li");
    node.innerHTML = msg;
    var f = document.getElementById("textbox");
    f.parentNode.insertBefore(node, f);
    console.log("recieve");
  });
}
