//= require_tree .

var gridResize = function() {
	var availableWidth = $(window).width();
	var availableHeight = $(window).height() - 40 -( $("header").height() + $("footer").height() );
	
	var gridWidth;
	var gridHeight;
	var gridPadding;
	
	if ( availableHeight < availableWidth ) {
		gridPadding = availableHeight / 10;
		gridHeight = availableHeight - gridPadding;
		gridWidth = gridHeight;
	} else {
		gridPadding = availableWidth / 10;
		gridWidth = availableWidth - gridPadding;
		gridHeight = gridWidth;
	}
	
	$("#maingrid").height(gridHeight).width(gridWidth).css({
        position:'absolute',
        left: ($(window).width() - $('#maingrid').outerWidth())/2,
        top: ($(window).height() - $('#maingrid').outerHeight())/2 + ($("header").height()/2)
    });
}

var flutterAnimation = function() {

	var delay = 0;

	for (var n = 1; n <= $('#maingrid ul li').length; n++) {
		delay = n * 0.2 + "s";
		$("#maingrid ul li:nth-child(" + n + ")").attr("style","-webkit-animation: flutter 10s ease-in-out " + delay + " infinite");
	}
}

$(document).ready(function() {

	document.ontouchmove = function(e) {e.preventDefault()};
	
	gridResize();
	$(window).on("resize", function() {
		gridResize();
	});
	
	flutterAnimation();
});