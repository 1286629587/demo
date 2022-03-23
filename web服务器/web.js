//导入http模块
const http = require('http');

//创建web实例
const server = http.createServer();

//为服务器绑定request事件，监听客户端请求
server.on('request', function(req, res) {
    // const str = `your request url is ${req.url}, and request method is ${req.method}`
    // const str = `您请求的url地址是${req.url}，请求方法是${req.method}`
    // res.setHeader('Content-Type','text/html; charset=utf-8');
    // res.end(str);
    
    const url = req.url;
    let content = '<h1>404 Not found!</h1>';
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    }
    else if (url === '/about.html') {
        content = '<h1>关于页面</h1>';
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
});

//启动服务器
server.listen(80, function() {
    console.log('server running at http://127.0.0.1:80');
});
