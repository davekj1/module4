(function(window){
	var byeSpeaker={};
	byeSpeaker.say="Good Bye ";
	byeSpeaker.speak=function(name){
		console.log(byeSpeaker.say + name);
	}
	window.byeSpeaker=byeSpeaker;
	
})(window);