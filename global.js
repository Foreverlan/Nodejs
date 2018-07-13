console.log('__filename: ' + __filename);

console.log('__dirname: ' + __dirname);

function printHello(){
	console.log('hello world!');
}

var timer = setTimeout(printHello,2000);

setTimeout(function(){
	console.log('匿名函数');
},2000);

clearTimeout(timer);


setInterval(printHello,2000);