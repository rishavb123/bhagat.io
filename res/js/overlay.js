const video = document.getElementById("overlay_video");

const _overlay = $('.overlay-canvas');
_overlay.fadeOut(0);
const overlay = _overlay[0];

const output = overlay.getContext('2d');

const isTouchDevice = 'ontouchstart' in document.documentElement;

let overlay_state = "none";

overlay.width = innerWidth;
overlay.height = innerHeight;

let education_img = new Image();
education_img.src = "./res/imgs/overlay-images/equations.jpg";

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

    switch(overlay_state) {
        case "karate":
            output.globalAlpha = 1;
            output.drawImage(video, x, y, w, h);
            break;
        case "education":
            output.globalAlpha = 0.1;
            output.drawImage(education_img, x, y, w, h);
            break;
    }
}

overlay_config = {
    "none": {},
    "karate": {
        offset: "65%",
        onenter: () => video.play(),
        onexit: () => video.pause(),
        above: "education"
    },
    "education": {
        offset: "40%",
        above: "none"
    }
};

if(!isTouchDevice) {
    for(let overlay_section in overlay_config) {
        if(overlay_section == 'none') continue;
        let overlay_section_config = overlay_config[overlay_section];
        $(`#${overlay_section}`).waypoint(direction => {
            if(direction == "down") {
                console.log(overlay_section, overlay_section_config);
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
                    console.log("hi");
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