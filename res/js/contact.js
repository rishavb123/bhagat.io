$('#contact-form-submit').click(() => {
    const detail = {
        name: $('#contact-form-name').val(),
        returnAddress: $('#contact-form-email').val(),
        message: $('#contact-form-message').val(),
    };

    if (detail.name && detail.returnAddress && detail.message) {
        fetch('https://bhagat-api.herokuapp.com/contact/discord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detail)
        }).then(resp => resp.json()).then((data) => {
            if (data.status) {
                alert('Error: ' + data.msg);
            } else {
                $('#contact-form-message').val('');
            }
        });
    } else {
        alert('Error: Some fields are empty!')
    }

});