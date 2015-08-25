(function($) {
    $(document).ready(function() {
	
	$('#animation1').scianimator({
	    'images': ['animation1/animation11.png', 'animation1/animation12.png', 'animation1/animation13.png', 'animation1/animation14.png', 'animation1/animation15.png'],
	    'width': 600,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#animation1').scianimator('play');
    });
})(jQuery);
