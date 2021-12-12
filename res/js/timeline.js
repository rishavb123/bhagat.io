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
                description: 1
            }
        }
    })
}).then(resp => resp.json()).then((data) => {
    console.log(data);
});