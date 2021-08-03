let theta = 0;
const isTouchDevice = 'ontouchstart' in document.documentElement;
const heightMoreThanWidth = $(window).height() > $(window).width();

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


$(document).on('scroll', () => {
    const scroll = $(document).scrollTop() + $(window).height() / 2;

    const scrollStart = $('#setup').position().top;
    const height = $('#setup').outerHeight();

    const scrollMargin = 0.3;
    const scrollUpshift = 0.1;

    const offset = scroll - scrollStart;
    const ratio = (offset - (scrollMargin + scrollUpshift) * height) / ((1 - 2 * scrollMargin) * height);
    

    $('#setup-img img').css('opacity', 1 - Math.max(Math.min(ratio, 1), 0));

})

if (isTouchDevice) {
    $('.subsection-description img:not(.mobile-keep)').remove();
    $('.mobile-remove').remove();
    $('*').addClass('mobile');
}

if (window.innerHeight > window.innerWidth) {
    $('*').addClass('vertical-screen');
}