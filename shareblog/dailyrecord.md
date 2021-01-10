# 开发者日志
1. mock.js引入后使用问题
   在设置好对应url访问返回的数据后，发现每次axios发出请求都会得到404问题，问题在于Mock.mock('url', 'get', data)，其中url为需要拦截的请求url，'get'为请求方式，data为返回的mock数据，问题就出在请求方式，之前写的是'GET',大写的，导致无法将请求拦截到  -20210110
2. 子元素position为absolute时，父元素高度不随子元素自适应  
   解决方法为将子元素的position更改为relative