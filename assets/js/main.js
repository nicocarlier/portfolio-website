// Play video and hide image
function playVideo(projectName) {
	const video = document.querySelector(`video[data-project="${projectName}"]`);
	const image = document.querySelector(`img[data-project="${projectName}"].project-media`);
	const overlay = document.querySelector(`img[data-project="${projectName}"].project-media-overlay`);
  
	image.style.display = 'none';
	overlay.style.display = 'none';
	video.style.display = 'block';
	video.play();

	if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }

	video.addEventListener('click', () => handleVideoPlayPause(projectName));
}
  
// Handle video end
function handleVideoEnd(projectName) {
	const video = document.querySelector(`video[data-project="${projectName}"]`);
	const image = document.querySelector(`img[data-project="${projectName}"].project-media`);
	const overlay = document.querySelector(`img[data-project="${projectName}"].project-media-overlay`);

    // Check if the video is in fullscreen mode
    if (document.fullscreenElement === video) {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // Standard method
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

	video.style.display = 'none';
	image.style.display = 'block';
	overlay.style.display = 'block';
}

function handleVideoPlayPause(projectName) {
	const video = document.querySelector(`video[data-project="${projectName}"]`);
	const overlay = document.querySelector(`img[data-project="${projectName}"].project-media-overlay`);
	
	// Check if the video is in fullscreen mode
	if (document.fullscreenElement === video) return;
	
	
	if (video && !video.paused) {
        video.pause(); 
		overlay.style.display = 'block';
	} else if (video.paused){
		video.play();
		overlay.style.display = 'none';
    } 
}

const urlMap = {
	Fairbnb: {
		liveSite: 'https://fairbnb-36c07c3f3067.herokuapp.com/',
		seeCode: 'https://github.com/ncar285/Fairbnb'
	},
	Tubify: {
		liveSite: 'https://ncar285.github.io/Tubify/',
		seeCode: 'https://github.com/ncar285/Tubify'
	},
	RepsNRecipes: {
		liveSite: 'https://reps-n-recipes-d98cf03910d0.herokuapp.com/',
		seeCode: 'https://github.com/stefanlazarevic97/reps-n-recipes'
	}
};
  
// Event listener for buttons and image
document.querySelectorAll('.action-buttons button, img.project-media').forEach(button => {
	const projectName = button.getAttribute('data-project');
	const action = button.getAttribute('data-action');

	button.addEventListener('click', () => {
		const url = urlMap[projectName][action];
		switch (action) {
		case 'liveSite':
		case 'seeCode':
			window.open(url, '_blank');
			break;
		case 'playDemo':
			playVideo(projectName);
			break;
		}
	});
  
	if (action === 'playDemo') {
	  const video = document.querySelector(`video[data-project="${projectName}"]`);
	  video.addEventListener('ended', () => handleVideoEnd(projectName));
	}
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