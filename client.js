/**
 * Created by lizi on 2016/11/14.
 * 用于接收中控信息的守护进程客户端
 */

var client = require("socket.io-client");

//构造函数
var ControlClient = function(url){
    this.url = url;
    console.log(`尝试连接中控:${url}`);
    this.curClient = client.connect(url);

    this.curClient.on('connect', function(){
        console.log('连接中控成功!');
    });

    this.curClient.on('reconnect',number=>{
        console.log(`第${number}次重连中控成功!!`);
    })

    this.curClient.on('reconnecting',number=>{
        console.log(`第${number}次尝试重连中控...`);
    })

    this.curClient.on('disconnect',()=>{
        console.log(`守护进程从中控断开!`);
    })
}

//监听事件
ControlClient.prototype.on = function(eventName,callback){
    this.curClient.on(eventName,callback);
}

module.exports = ControlClient;





