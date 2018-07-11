var eventEmitter = require('events').EventEmitter;

var events = new eventEmitter();

var listener1 = function(){
	console.log('监听器listener1执行');
};

events.on('connection',function(){

	console.log('监听器 listener2 执行');
	
});

events.addListener('connection',listener1);



var counts = require('events').EventEmitter.listenerCount(events,'connection');
console.log(counts + '个监听器监听connection事件');

events.emit('connection');

console.log("移除监听器");

//events.removeListener('connection',listener1);
events.removeAllListeners('connection');


events.emit('connection');

counts = require('events').EventEmitter.listenerCount(events,'connection');
console.log(counts + '个监听器监听connection事件');