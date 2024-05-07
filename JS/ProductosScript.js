$(document).ready(function() {
    $.ajax({
        url: '',
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "",
            'X-RapidAPI-Host': '',
        },
        success: function(respuesta) {
            if (respuesta.response && respuesta.response.length > 0) {
                var anime = respuesta.response[0];
            }
        },
        
    });
    
});