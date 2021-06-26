// let projects_list = document.getElementById('full-project-list');
// const source = $('#projects-template')[0].innerHTML;
// const template = Handlebars.compile(source);
// $('#full-project-list').append(template(projects));

let curOffset = 0;
const perPage = 10;

const progressBgColors = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger', 'bg-secondary'];

function formatIso(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

function loadProjects() {
    fetch('https://bhagat-api.herokuapp.com/db', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            db: 'bhagat-db',
            collection: 'gh-repos',
            options: {
                sort: {
                    lastUpdated: -1
                },
                skip: curOffset,
                limit: perPage,
                projection: {
                    _id: 0,
                    name: 1,
                    description: 1,
                    languages: 1,
                    info: 1,
                    createdDate: 1,
                    lastUpdated: 1
                }
            }
        })
    }).then(resp => resp.json()).then((data) => {
        data = data.documents.map((d) => {
            const copy = { ...d };
            for (let i = 0; i < copy.languages.length; i++) {
                const language = copy.languages[i];
                language.percent = Math.round(language.percent * 10000) / 100.0;
                language.bgColor = progressBgColors[i % progressBgColors.length];
            }
            copy.createdDate = formatIso(copy.createdDate);
            copy.lastUpdated = formatIso(copy.lastUpdated);
            return copy;
        });
        const source = $('#projects-template')[0].innerHTML;
        const template = Handlebars.compile(source);
        $('#full-project-list').append(template(data));
        curOffset += perPage;
        if (data.length < perPage) {
            $('#load-more-projects').remove();
        }
    });
}

loadProjects();
$('#load-more-projects').click(loadProjects);