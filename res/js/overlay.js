const video = document.getElementById("overlay_video");

const _overlay = $('.overlay-canvas');
_overlay.fadeOut(0);
const overlay = _overlay[0];

const output = overlay.getContext('2d');

let overlay_state = "none";

overlay.width = innerWidth;
overlay.height = innerHeight;

let education_img = new Image();
education_img.src = "./res/imgs/overlay-images/equations.jpg";

addEventListener('resize', function() {
	overlay.width = innerWidth;	
    overlay.height = innerHeight;
})

let mouseX = 0, mouseY = 0;
const mouseSize = 100;

window.onmousemove = e => {
    mouseX = e.pageX;
    mouseY = e.pageY;
}

const artCropImage = new Image();
function handleCarousel(e, tag=0) {
    if (artCrops[e.relatedTarget.id] && (tag !== 1231234 || !artCropImage.src))
        artCropImage.src = artCrops[e.relatedTarget.id];
    else
        setTimeout(() => handleCarousel(e, tag=1231234), 1000)
}
$('#mtg-carousel').on('slide.bs.carousel', handleCarousel);

function processFrame() {
    output.clearRect(0, 0, overlay.width, overlay.height);

    let x = 0;
    let y = 0;
    let w = overlay.width;
    let h = overlay.height;

    switch(overlay_state) {
        case "martial_arts":
            output.globalAlpha = 0.5;
            output.drawImage(video, x, y, w, h);
            break;
        case "education":
            output.globalAlpha = 0.1;
            output.drawImage(education_img, x, y, w, h);
            break;
        case "mtg":
            output.globalAlpha = 0.2;
            output.drawImage(artCropImage, x, y, w, h);
            break;
    }
}

let playmat_image = new Image();
let gif_canvas;

playmat_image.onload = () => {
    const gif = new SuperGif({
        gif: playmat_image,
        progressbar_height: 0,
        auto_play: true,
        loop_mode: true,
        draw_while_loading: true
    });
    gif.load();
    gif_canvas = gif.get_canvas();
};
    
playmat_image.src = 'res/imgs/overlay-images/playmat.gif';

overlay_config = {
    "none": {},
    "education": {
        offset: "70%",
        above: "none"
    },
    "experience": {
        above: "education",
        offset: "10%"
    },
    "martial_arts": {
        offset: "55%",
        onenter: () => video.play(),
        onexit: () => video.pause(),
        above: "experience"
    },
    "mtg": {
        above: "martial_arts",
        offset: "25%"
    },
    "setup": {
        above: "mtg",
        offset: "10%"
    }
};

if(!isTouchDevice) {
    for(let overlay_section in overlay_config) {
        if(overlay_section == 'none') continue;
        let overlay_section_config = overlay_config[overlay_section];
        $(`#${overlay_section}`).waypoint(direction => {
            if(direction == "down") {
                if(overlay_section_config.onenter)
                    overlay_section_config.onenter();
                let t = 0;
                if(overlay_state !== "none") {
                    _overlay.fadeOut(1000);
                    t = 1000;
                }
                setTimeout(() => {
                    if(overlay_config[overlay_state].onexit)
                        overlay_config[overlay_state].onexit();
                    overlay_state = overlay_section;
                    _overlay.fadeIn(1000);
                }, t);
            } else {
                if(overlay_section_config.onexit)
                    overlay_section_config.onexit();
                _overlay.fadeOut(1000);
                setTimeout(() => {
                    overlay_state = overlay_section_config.above;
                    if(overlay_config[overlay_state].onenter)
                        overlay_config[overlay_state].onenter();
                    if(overlay_state !== "none") {
                        _overlay.fadeIn(1000);
                    }
                }, 1000);
            }
        }, {
            offset: overlay_section_config.offset
        });
    }
}

video.onended = () => video.play();

let interval = setInterval(processFrame, 40);;