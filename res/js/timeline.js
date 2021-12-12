const options = {
    start_at_end: true,
    timenav_height: 250,
    default_bg_color: {r: 255, g: 255, b: 255}
};

fetch('https://bhagat-api.herokuapp.com/db', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        db: "bhagat-db",
        collection: "timeline-events",
        options: {
            sort: {
                "startDate.stamp": -1
            },
            projection: {
                _id: 0,
                startDate: 1,
                endDate: 1,
                name: 1,
                description: 1,
                media: 1,
            }
        }
    })
}).then(resp => resp.json()).then((data) => {
    console.log(data);
    const timelineJSON = {
        events: data.documents.map((doc) => ({
            start_date: doc.startDate,
            end_date: (doc.startDate.stamp === doc.endDate.stamp) ? undefined : doc.endDate,
            text: {
                headline: doc.name,
                text: doc.description
            },
            media: (doc.media) ? {
                url: doc.media.url,
                caption: doc.media.caption,
                alt: doc.media.caption
            }: undefined
        })),
    };
    console.log(timelineJSON);
    new TL.Timeline('timeline-embed', timelineJSON, options);
});