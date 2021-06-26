let theta = 0;
const isTouchDevice = 'ontouchstart' in document.documentElement;

function headerImageRotate(a) {
    theta = a % 360;
    $('#header-img').css('transform', 'rotate(' + theta + 'deg)');
}

let spinningInterval;

$("#header-img").hover(() => {
    spinningInterval = setInterval(() => headerImageRotate(theta + 1), Math.floor(Math.random() * 20) + 1);
}, () => {
    clearInterval(spinningInterval);
});

function copy(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.style.display = "none";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied " + str);
};

let pixels = 0;
let projects_list = document.getElementById("full-project-list");

function scrollProjects(num) {
    let t = 0;
    let origPixels = pixels;
    let interval = setInterval(() => {
        if(num > 0)
            pixels += 2;
        else
            pixels -= 2;
        projects_list.scroll(pixels, 0);
        if(pixels - origPixels == num || pixels - origPixels == num + 1)
            clearInterval(interval);
        t++;
        if(t > 500)
            clearInterval(interval)
    });
}

projects_list.onscroll = () => {
    pixels = projects_list.scrollLeft;
}

document.getElementById("leftBtn").onclick = () => {
    scrollProjects(document.getElementsByClassName("project")[0].clientWidth * -2);
}

document.getElementById("rightBtn").onclick = () => {
    scrollProjects(document.getElementsByClassName("project")[0].clientWidth * 2);
}

$('.bring-in-sticky-nav').waypoint(direction => {
    if (direction === "down") {
        $('nav').css('display', "none");
        $('nav').addClass("fixed-top");
        $('nav').fadeIn();
    } else {
        $('nav').fadeOut("normal", () => {
            $('nav').removeClass("fixed-top");
            $('nav').css('display', '');
        });
    }
}, {
    offset: "25%"
});

const sections = document.getElementsByClassName("section");
for (let i in sections) {
    const section = sections[i];
    $("#" + section.id).waypoint(direction => {
        $(".nav-link").removeClass("active");
        if (direction == "up" && sections[i - 1])
            $("#nav-" + sections[i - 1].id).addClass("active");
        else
            $("#nav-" + section.id).addClass("active");
    });
}

new SmoothScroll('a[href*="#"]', {
    easing: "easeOutQuint",
    speed: 500,
    durationMin: 100,
    updateURL: false,
    popstate: true
});

new Rellax('.rellax');

const source = $("#projects-template")[0].innerHTML;
const template = Handlebars.compile(source);
$("#full-project-list").append(template(projects));

if('ontouchstart' in document.documentElement) {
    // $('#setup-video').css('pointer-events', 'auto');
    $('#setup-video').css('border-radius', '0');
    $('#setup-video').attr("src", "https://www.youtube.com/embed/XuCRpQ7TmHo?rel=0&controls=1")
}

// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('setup-video', {
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// function onPlayerStateChange(event) {
//     if(event.data == YT.PlayerState.ENDED)
//         event.target.playVideo();
// }

const artCrops = {};

// Load in projects the same way
fetch('https://bhagat-api.herokuapp.com/db', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        db: 'bhagat-db',
        collection: 'mtg-edh-decks',
        query: {
            "deckType": 'Commander / EDH'
        },
        options: {
            sort: {
                name: 1
            },
            projection: {
                _id: 0,
                name: 1,
                url: 1,
                commander: 1,
                description: 1
            }
        }
    })
}).then(resp => resp.json()).then((data) => {
    if (!isTouchDevice) {
        const n = data.count;
        const indicatorData = [];
        for (let i = 0; i < n; i++) {
            indicatorData.push({
                index: i,
                classes: i == 0 ? "active" : ""
            });
        }
        const deckIndicatorSource = $("#deck-indicator-template")[0].innerHTML;
        const deckIndicatorTemplate = Handlebars.compile(deckIndicatorSource);
        $("#deck-indicator-template-holder").append(deckIndicatorTemplate(indicatorData));
    }

    const colors = ['W', 'U', 'B', 'R', 'G'];
    const colorsSort = (a, b) => colors.indexOf(a) < colors.indexOf(b)? -1: 1;

    data = data.documents.map((deck, i) => ({
        classes: i == 0 ? "active" : "",
        mobile: isTouchDevice ? "mobile": "",
        name: deck.name,
        description: deck.description? deck.description.replaceAll("; ", " <br/><br/>"): "No Description",
        image: isTouchDevice? deck.commander.art_crop: deck.commander.image_url,
        art: deck.commander.art_crop,
        id: deck.name.replaceAll(" ", "-"),
        commanderName: deck.commander.name,
        colors: deck.commander.color_identity?.sort(colorsSort),
        url: deck.url,
        manaValue: deck.commander.mana_value,
    }));

    for (const d of data) {
        artCrops[d.id] = d.art;
    }
    handleCarousel({ relatedTarget: { id: data[0].id } });

    const deckSource = $("#deck-template")[0].innerHTML;
    const deckTemplate = Handlebars.compile(deckSource);
    $("#deck-template-holder").append(deckTemplate(data));

    const deckLinksSource = $('#deck-links-template')[0].innerHTML;
    const deckLinksTemplate = Handlebars.compile(deckLinksSource);
    $('#deck-links-holder').append(deckLinksTemplate(data));
});

if (isTouchDevice) {
    $('.subsection-description img:not(.mobile-keep)').remove();
}