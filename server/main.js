const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
  
const io = socketIO(server,{
    cors: {
        origin: '*'
    }
});
  
io.on('connection',(socket) => {
    console.log('有客户端连接了');
    socket.on('hello',(data) => {
        console.log(`收到客户端的消息了：${data}`);
    })
    socket.on('disconnect',()=>{
        console.log("客户端断开连接了")
    })
});
  
  
app.get('/',(request, response) => {
    /*在浏览器发送 http://127.0.0.1:24000 的请求，客户端定义了监听'message'的socket，所以可以接收消息，即使客户端有代码
        io.on('message',(data) => {
            console.log(data);
        });
    */
    io.emit('message','服务端向客户端推送消息...');
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end();
});
  
  
server.listen(24000,() => {
    console.log("server is up and running on port 24000");
});