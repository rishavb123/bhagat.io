const options = {
    start_at_end: true,
    timenav_height: 250,
    default_bg_color: {r: 255, g: 255, b: 255}
};

const date = new Date();
const dateJSON = {
    month: date.getMonth() + 1,
    day: date.getDate(),
    year: date.getFullYear()
};

dbApiCallWithBackup({
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
    }),
    timeout: 3000
}, (data) => {
    const timelineJSON = {
        events: data.documents.map((doc) => ({
            start_date: doc.startDate.month > 12 || doc.startDate.day > 31? dateJSON: doc.startDate,
            end_date: (doc.startDate.stamp === doc.endDate.stamp) ? undefined : (doc.endDate.month > 12 || doc.endDate.day > 31? dateJSON: doc.endDate),
            text: {
                headline: doc.name,
                text: doc.description
            },
            media: (doc.media) ? {
                url: doc.media,
            }: undefined
        })),
    };
    new TL.Timeline('timeline-embed', timelineJSON, options);
}, "timeline");