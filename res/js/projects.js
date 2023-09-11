let curOffset = 0;
const perPage = 9;
const maxLangs = 7;

const bgColors = [
    'bg-primary',
    'bg-success',
    'bg-info',
    'bg-warning',
    'bg-warning',
    'bg-warning',
    'bg-danger',
    'bg-success'
];
const progressBgColorsMap = {
    python: 'bg-primary',
    java: 'bg-success',
    javascript: 'bg-info',
    c: 'bg-warning',
    'c#': 'bg-warning',
    'c++': 'bg-warning',
    html: 'bg-danger',
    css: 'bg-success',
    default: 'bg-secondary',
    random: () => bgColors[Math.floor(Math.random() * bgColors.length)],
};

function formatIso(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

function loadProjects() {
    dbApiCallWithBackup({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            db: 'bhagat-db',
            collection: 'gh-repos',
            options: {
                sort: [
                    ["info.priority", -1],
                    ["lastUpdated", -1]
                ],
                skip: curOffset,
                limit: perPage,
                projection: {
                    _id: 0,
                    name: 1,
                    description: 1,
                    languages: 1,
                    "info.links": 1,
                    "info.imageUrl": 1,
                    createdDate: 1,
                    lastUpdated: 1
                }
            }
        }),
        timeout: 3000
    }, (data) => {
        data = data.documents.map((d) => {
            const copy = { ...d };
            copy.description = copy.description.replace(/\n/g, '<br>').linkify();
            copy.languages = [];
            let i = 0;
            for (const oldLanguage of d.languages) {
                const language = { ...oldLanguage };
                language.percent = Math.round(language.percent * 10000) / 100.0;
                language.bgColor = progressBgColorsMap[language.name.toLowerCase()] || progressBgColorsMap.default;
                if (language.percent >= 0.1 && i < maxLangs) {
                    copy.languages.push(language);
                    i++;
                }
            }
            copy.createdDate = formatIso(copy.createdDate);
            copy.lastUpdated = formatIso(copy.lastUpdated);
            return copy;
        });
        const numLoaded = data.length;
        const source = $('#projects-template')[0].innerHTML;
        const template = Handlebars.compile(source);
        const newHtml = template(data);
        
        if (!heightMoreThanWidth) {
            $('#temp-load-projects').html(newHtml);
            const projectCards = $('#temp-load-projects').find('.project');

            const colA = [];
            const colB = [];
            const colC = [];
            let aH = 0;
            let bH = 0;
            let cH = 0;

            const colAProjects = $('#project-col-a').find('.project');
            colAProjects.each((i) => {
                aH += $(colAProjects[i]).outerHeight(true);
            });

            const colBProjects = $('#project-col-b').find('.project');
            colBProjects.each((i) => {
                bH += $(colBProjects[i]).outerHeight(true);
            });

            const colCProjects = $('#project-col-c').find('.project');
            colCProjects.each((i) => {
                cH += $(colCProjects[i]).outerHeight(true);
            });

            projectCards.each((i) => {
                const card = $(projectCards[i]);
                if (aH <= bH && aH <= cH) {
                    colA.push(card[0].outerHTML);
                    aH += card.outerHeight(true);
                } else if (bH <= cH) {
                    colB.push(card[0].outerHTML);
                    bH += card.outerHeight(true);
                } else {
                    colC.push(card[0].outerHTML);
                    cH += card.outerHeight(true);
                }
            });
            $('#temp-load-projects').html("");

            const reduceFunc = (total, str) => total + str;
            const htmlA = colA.reduce(reduceFunc);
            const htmlB = colB.reduce(reduceFunc);
            const htmlC = colC.reduce(reduceFunc);

            $('#project-col-a').append(htmlA);
            $('#project-col-b').append(htmlB);
            $('#project-col-c').append(htmlC);
        } else {
            $('#full-project-list').append(newHtml);
        }
        curOffset += perPage;
        if (numLoaded < perPage) {
            $('#load-more-projects').remove();
        }
        Waypoint.refreshAll()
        $('#full-project-list img').on("load", () => {
            Waypoint.refreshAll()
        })
    }, "repos", curOffset, perPage);
}

if (heightMoreThanWidth) {
    $('#full-project-list').html("");
    $('#full-project-list').removeClass("flex-nowrap");
}

loadProjects();
$('#load-more-projects').click(loadProjects);