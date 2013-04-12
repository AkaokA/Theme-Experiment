//= require_tree .

var gridResize = function() {
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	
	var gridWidth;
	var gridHeight;
	var gridPadding = ($('#maingrid').outerWidth()/200) + (( $("header").height() + $("footer").height() )*2);
	
	if ( viewportHeight < viewportWidth ) {
		gridHeight = viewportHeight - gridPadding;
		gridWidth = gridHeight;
	} else {
		gridWidth = viewportWidth - gridPadding;
		gridHeight = gridWidth;
	}
	
	$("#maingrid").height(gridHeight).width(gridWidth).css({
        position:'absolute',
        left: ($(window).width() - $('#maingrid').outerWidth())/2,
        top: ($(window).height() - $('#maingrid').outerHeight())/2
    });
}

$(document).ready(function() {
	document.ontouchmove = function(e) {e.preventDefault()};
	
	gridResize();
	$(window).on("resize", function() {
		gridResize();
	});
});