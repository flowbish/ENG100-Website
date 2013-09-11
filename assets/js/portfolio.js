$(document).ready(function(){
	var running = false;
	$("#projects .info-side-button").click(function(){
		if (!running) {
			running = true;
			$("#about .info-main-panel").animate({top:-430}, 1000, function(){
				$("#about").css("z-index","5")
			}).animate({top:-30}, 1000);
			
			$("#contact .info-main-panel").animate({top:-430}, 1000, function(){
				$("#contact").css("z-index","0")
			}).animate({top:-30}, 1000);
			
			$("#projects").delay(1000).css("z-index","10").delay(1000,
														function(){running = false;})
		}
    });
	
	$("#contact .info-side-button").click(function(){
		if (!running) {
			$("#about .info-main-panel").animate({top:-430}, 1000, function(){
				$("#about").css("z-index","5")
			}).animate({top:-30}, 1000);
			
			$("#projects .info-main-panel").animate({top:-430}, 1000, function(){
				$("#projects").css("z-index","0")
			}).animate({top:-30}, 1000);
			
			$("#contact").delay(1000).css("z-index","10")
		}
    });
	
	$("#about .info-side-button").click(function(){
		if (!running) {
			$("#projects .info-main-panel").animate({top:-430}, 1000, function(){
				$("#projects").css("z-index","5")
			}).animate({top:-30}, 1000);
			
			$("#contact .info-main-panel").animate({top:-430}, 1000, function(){
				$("#contact").css("z-index","0")
			}).animate({top:-30}, 1000);
			
			$("#about").delay(1000).css("z-index","10")
		}
    });
});