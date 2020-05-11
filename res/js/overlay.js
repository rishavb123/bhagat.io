const video = document.getElementsByTagName("video")[0];

const overlay = $('.overlay-canvas')[0]
const output = overlay.getContext('2d');

let interval;

overlay.width = innerWidth;
overlay.height = innerHeight;

// output.fillStyle = 'white';
// output.fillRect(0, 0, 600, 600);

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

    let	image = output.getImageData(0, 0, overlay.width, overlay.height),
        imageData = image.data;

        
    for (let i = 0, len = imageData.length; i < len; i = i + 4) {
        imageData[i + 3] = imageData[i] + imageData[i + 1] + imageData[i + 2] / 3;
    }

    output.putImageData(image, 0, 0);
}
console.log('hello');

video.play();

video.addEventListener('play', function() {
    clearInterval(interval);
    interval = setInterval(processFrame, 40)
}, false);

video.onended = () => video.play();