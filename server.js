/**
 * Created by lizi on 2016/11/14.
 * 用于和精灵通讯的守护进程服务
 */
var server = require('socket.io');
//构造函数
var SpriteServer = function(port){
    //开启精灵服务监听
    console.log(`开启精灵服务器监听:${port}`);
    this.io = new server(port);
    this.io.on('connection', function (socket) {

        console.log('精灵连接成功!');

        socket.on('disconnect', function () {
            console.log(`精灵断开！`);
        });
    });
}

module.exports = SpriteServer;
