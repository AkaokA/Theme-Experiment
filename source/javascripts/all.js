//= require_tree .

var gridResize = function() {
	var availableWidth = $(window).width();
	var availableHeight = $(window).height() - ( $("header").height() + $("footer").height() );
	
	var gridWidth;
	var gridHeight;
	var gridPadding = ($('#maingrid').outerWidth()/5);
	
	if ( availableHeight < availableWidth ) {
		gridHeight = availableHeight - gridPadding;
		gridWidth = gridHeight;
	} else {
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
/*
	var i, li, _i, _len, _ref;
	
	_ref = $('#maingrid ul li');
	for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	  li = $(_ref[i]);
	  li.css('color', 'blue');
	  console.log(i*0.5);
*/
/* 	  console.log(li.css('-webkit-animation-delay')) */
/* 	} */

	var delay = 0;

	for (var n = 1; n <= $('#maingrid ul li').length; n++) {
		delay = n * 0.5 + "s";
		$("#maingrid ul li:nth-child(" + n + ")").attr("style","-webkit-animation: peek 10s ease-in-out "+delay+" infinite", 
		function() {

		});
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