(function($) {
    $(document).ready(function() {
	
	$('#Rplot').scianimator({
	    'images': [],
	    'width': 640,
	    'delay': 2000,
	    'loopMode': 'loop',
 'dwellMultiplier': 1
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);
