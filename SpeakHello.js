(function(window){
	var helloSpeaker={};
	helloSpeaker.say="Hello ";
	helloSpeaker.say="Hello ";
	helloSpeaker.speak=function(name){
		console.log(helloSpeaker.say + name);
	}
	window.helloSpeaker=helloSpeaker;
})(window);
