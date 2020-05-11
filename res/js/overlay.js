const video = document.getElementById("overlay_video");

const _overlay = $('.overlay-canvas');
const overlay = _overlay[0];

const output = overlay.getContext('2d');

const isTouchDevice = 'ontouchstart' in document.documentElement;

let interval;

overlay.width = innerWidth;
overlay.height = innerHeight;

addEventListener('resize', function() {
	overlay.width = innerWidth;	
    overlay.height = innerHeight;
})

function processFrame() {
    output.clearRect(0, 0, overlay.width, overlay.height);

    let x = 0,
        y = 0,
        w = overlay.width,
        h = overlay.height;

    output.drawImage(video, x, y, w, h);
}

if(!isTouchDevice) {
    $('#karate').waypoint(direction => { 
        if (direction === "down") {
            video.play();
            _overlay.fadeIn(1000);

        } else {
            clearInterval(interval);
            video.pause();
            _overlay.fadeOut(2000);
        }
    }, {
        offset: "75%"
    });
}

video.addEventListener('play', function() {
    clearInterval(interval);
    interval = setInterval(processFrame, 40);
}, false);

video.onended = () => video.play();