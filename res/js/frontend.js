let theta = 0

function headerImageRotate(a) {
    theta = a % 360;
    $('#header-img').css('transform', 'rotate(' + theta + 'deg)');
}

$('#about-me').waypoint(direction => {
    if (direction === "down") {
        $('nav').addClass("fixed-top");
        $('nav').addClass("load");
    } else {
        $('nav').removeClass("fixed-top");
        $('nav').removeClass("load");
    }
}, {
    offset: "25%"
});

const sections = document.getElementsByClassName("section");
for (let i in sections) {
    const section = sections[i];
    $("#" + section.id).waypoint(direction => {
        $(".nav-link").removeClass("active");
        if (direction == "up")
            $("#nav-" + sections[i - 1].id).addClass("active");
        else
            $("#nav-" + section.id).addClass("active");
    });
}

new SmoothScroll('a[href*="#"]', {
    easing: "easeOutQuint",
    speed: 2000,
    durationMin: 1000,
    updateURL: false,
    popstate: true
});