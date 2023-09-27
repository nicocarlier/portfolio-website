

// Get elements
var video = document.getElementById('demoVideo');
var image = document.getElementById('demoImage');
var playButton = document.getElementById('playButton');

// Initially hide the video
video.style.display = 'none';

// Play video on button click
playButton.addEventListener('click', function() {
  // Hide image, show video
  image.style.display = 'none';
  video.style.display = 'block';

  // Play video
  video.play();
});

// Hide video and show image when video ends
video.addEventListener('ended', function() {
	// Hide video, show image
	video.style.display = 'none';
	image.style.display = 'block';
});


(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);