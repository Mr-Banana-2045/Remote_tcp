var net = require('net');
let count = 0;
var server = net.createServer(function (socket){
  socket.setEncoding('utf8');
  socket.write("TAT Tcp remote\r\n");
  count++;
  console.log("connect new",count,":");
  socket.on('end', ()=>{
    cosnole.log("disconnect client");
  });
});
server.listen(9000, function(){
  console.log("online server port 9000");
});
server.on("connection", (socket)=>{
  console.log(" client Data:")
  console.log(" IP :", socket.remoteAddress);
  console.log(" Port :", socket.remotePort);
  console.log(" IP Family :", socket.remoteFamily);
  console.log(" Local Address :", socket.localAddress);
  console.log(" Local Port :", socket.localPort);
  socket.on('data', (data)=>{
    cosnole.log(" input :",data);
  });
});
