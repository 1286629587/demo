## 安装
```
npm install hongzida-tools
```
## 注意：已从服务器删除，找不到的
## 导入
```js
const hongzida = require('hongzida-tools')
```

## 格式化时间
```js
 //调用dateFormat对时间进行格式化
 const time = index.dateFormat(new Date());
 console.log(time)
 //结果 2022-03-23 16:20:38
```

## 转义HTML中的特殊字符
```js
//待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
//调用htmlEscape方法进行转换
const str = index.htmlEscape(htmlStr);
console.log(str);
//转换结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原HTML中的特殊字符
```js
//待还原的HTML字符串
const html = index.htmlUnEscape(str);
console.log(html);
//结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议
ISC
