/**
 * Created by lizi on 2016/11/14.
 */
//导入
var ControlClient = require('./client');
var SpriteServer = require('./server');

//和精灵连接的服务
var spriteServer = new SpriteServer(50000);



//连接中控的客户端
var controlClient = new ControlClient('http://127.0.0.1:50000');

//(1)初始化游戏

//(2)开始游戏

//(3)结束游戏
