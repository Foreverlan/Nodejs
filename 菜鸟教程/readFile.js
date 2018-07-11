/*
//阻塞实例
var file = require('fs');
var data = file.readFileSync('file.txt'); 

console.log(data.toString());

console.log('程序执行完毕');
*/


//非阻塞实例

var file = require('fs');

file.readFile('file.txt',function(err, data){
	if(err)
		return console.error(err);
	else
		return console.log(data.toString());
});

console.log('程序执行完毕');