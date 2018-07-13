/*
function say(word) {
	console.log(word);
}

function execute(somefunction, value){
	somefunction(value);
}

execute(say,'foreverlan');
*/


//匿名函数
function execute(somefunction,value){
	somefunction(value);
}

execute( function(word){ 
	console.log(word)
},'foreverlan');