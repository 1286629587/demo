//导入fs模块
const fs = require('fs');
const path = require('path');

//读取文件内容
fs.readFile(path.join(__dirname, '/成绩.txt'), 'utf8', function(err, dataStr) {
    //判断是否读取成功
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    //把成绩的数据按照空格进行分割
    const arrOld = dataStr.split(' ');
    //遍历分割后的数组，对每一项数据进行字符串的替换
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'));
    });
    //把新数组中的每一项进行合并，得到新的字符串
    const newStr = arrNew.join('\r\n');
    //把数据写入新文件
    fs.writeFile('成绩-ok.txt', newStr, function(err) {
        if(err) {
            return console.log('写入文件失败！' + err.message);
        }
        else {
            console.log('成绩写入成功！');
        }
    })
    
})
