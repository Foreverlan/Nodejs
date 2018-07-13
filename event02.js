/*
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event',function(){

	console.log('some_event事件触发');

});

setTimeout(function(){

	eventEmitter.emit('some_event');	
	
},1000);
*/




var eventEmitter = require('events').EventEmitter;

var events = new eventEmitter();

events.on('some_event',function(arg1,arg2){

	console.log('listener1',arg1,arg2);

});

events.on('some_event',function(arg1,arg2){

	console.log('listener2',arg1,arg2);

});

events.emit('some_event','liu','cong');
