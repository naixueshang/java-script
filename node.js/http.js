var http = require('http')

//1. create a service with http.createServer() and get a serve instance object
//for the serve need to do the following things:
//1. receve request
//2. process request
//3. send response


var server=http.createServer()


//2通过给Server实例对象添加request请求事件
//这个请求事件是所有请求的入口
//任何请求都会出发该事件，然后执行事件对应的处理函数
server.on('request',function() {
	console.log(' 收到客户端请求了')
})

//3. 绑定端口号，开启服务器
//P1：用来制定绑定的端口号
//P2:可选参数
//P3:用来指定开启成功之后的回调函数
server.listen(8888,function() {
	console.log('sever is running at the port 8888')
})