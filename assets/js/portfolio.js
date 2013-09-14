$(document).ready(function(){
	$("#about .info-side-button").click(function(){	
		$("#about").css("z-index","10");
		$("#projects").css("z-index","5");
		$("#contact").css("z-index","0");
    });
	$("#projects .info-side-button").click(function(){	
		$("#projects").css("z-index","10");
		$("#about").css("z-index","5");
		$("#contact").css("z-index","0");
    });
	$("#contact .info-side-button").click(function(){	
		$("#contact").css("z-index","10");
		$("#about").css("z-index","5");
		$("#projects").css("z-index","0");
    });
});