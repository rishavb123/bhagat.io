const artCrops = {};

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
        description: deck.description? deck.description.replaceAll("; ", " <br/><br/>").linkify(): "No Description",
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