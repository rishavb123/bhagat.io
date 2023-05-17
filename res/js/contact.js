$('#contact-form-submit').click(() => {
    const detail = {
        name: $('#contact-form-name').val(),
        returnAddress: $('#contact-form-email').val(),
        message: $('#contact-form-message').val(),
    };

    if (detail.name && detail.returnAddress && detail.message) {
        apiCall('contact/discord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detail)
        }, (data) => {
            if (data.status) {
                alert('Error: ' + data.msg);
            } else {
                $('#contact-form-message').val('');
            }
        }, (err) => {
            alert("Contact service not available right now. Please try again later.")
        })
    } else {
        alert('Error: Some fields are empty!')
    }

});