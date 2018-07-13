var file =require('fs');
var data = '你是最棒的！foreverlan.';

var writerStream = file.createWriteStream('output.txt');

writerStream.write(data,'utf8');

writerStream.end();

writerStream.on('finish',function(){
	console.log('数据写入完成');
});

writerStream.on('error',function(err){
	console.log(err);
});

console.log('程序执行完毕');