var file =require('fs');
var data = '';

var readerStream = file.createReadStream('file.txt');

readerStream.setEncoding('utf8');

readerStream.on('data',function(chunk){
	console.log('数据加载');
	console.log(chunk);
	data +=chunk;
});

readerStream.on('end',function(){
	console.log('数据加载完成');
	console.log(data);
	writeData();
});

readerStream.on('finish',function(){
	console.log('数据已被写入');
	console.log('data');
});

readerStream.on('error',function(err){
	console.log(err)
})


var writeData = function(){
	var writerStream = file.createWriteStream('output.txt');

	writerStream.write(data,'utf8');

	writerStream.end();

	writerStream.on('finish',function(){
		console.log('数据写入完成');
	})

	writerStream.on('error',function(err){
		console.log(err);
	})
}
console.log('程序执行完毕');