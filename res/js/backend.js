let errorOccured = false;

function apiCall(path, options, dataHandler, errorHandler = () => { }) {
    if (errorOccured || true) {
        errorHandler();
    }
    else {
        fetch(`${API_URL}/${path}`, options).then(
            resp => resp.json()
        ).then(dataHandler).catch(() => {
            errorOccured = true;
            errorHandler();
        });
    }
}

function dbApiCallWithBackup(options, dataHandler, backupName, offset = undefined, maxlen = undefined) {
    return apiCall('db', options, dataHandler, dbErrorHandler(backupName, dataHandler, offset, maxlen))
}

function dbErrorHandler(backupName, dataHandler, offset = undefined, maxlen = undefined) {
    return () => {
        $.getJSON(DB_BACKUP, (data) => {
            data = data[backupName];
            if (offset != undefined) {
                data.documents = maxlen ? data.documents.slice(offset, offset + maxlen) : data.documents.slice(offset);
            }
            return dataHandler(data);
        });
    };
}