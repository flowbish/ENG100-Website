$(document).ready(function(){
	$("#projects .info-side-button").click(function(){
		$("#about .info-main-panel").animate({
			opacity:0
		}, 0);
		$("#contact .info-main-panel").animate({
			opacity:0
		}, 0);
		$("#projects .info-main-panel").animate({
			opacity:100
		}, 0);
    });
	
	$("#contact .info-side-button").click(function(){
		$("#about .info-main-panel").animate({
			opacity:0
		}, 0);
		$("#contact .info-main-panel").animate({
			opacity:100
		}, 0);
		$("#projects .info-main-panel").animate({
			opacity:0
		}, 0);
    });
	
	$("#about .info-side-button").click(function(){
		$("#contact .info-main-panel").animate({
			opacity:0
		}, 0);
		$("#projects .info-main-panel").animate({
			opacity:0
		}, 0);
		$("#about .info-main-panel").animate({
			opacity:100
		}, 0);
    });
});