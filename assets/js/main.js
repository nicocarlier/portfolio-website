

// ! JAVASCRIPT FOR PROJECT 1

// Open Live Site in a new tab...
document.getElementById('liveSiteButtonOne').addEventListener('click', function() {
	window.open('https://fairbnb-36c07c3f3067.herokuapp.com/', '_blank');
});
  
// Open Code Repo in a new tab...
document.getElementById('seeCodeButtonOne').addEventListener('click', function() {
window.open('https://github.com/ncar285/Fairbnb', '_blank');
});

// Play the demo video...

// Get elements
let videoOne = document.getElementById('projectVideoOne');
let imageOne = document.getElementById('projectImageOne');
let playButtonOne = document.getElementById('playDemoButtonOne');

// Initially hide the video
videoOne.style.display = 'none';

// Play video on button click
playButtonOne.addEventListener('click', function() {
  // Hide image, show video
  imageOne.style.display = 'none';
  videoOne.style.display = 'block';

  // Play video
  videoOne.play();
});

// Hide video and show image when video ends
videoOne.addEventListener('ended', function() {
	// Hide video, show image
	videoOne.style.display = 'none';
	imageOne.style.display = 'block';
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