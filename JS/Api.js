$(document).ready(function(){
    $("#enviar").click(function(){
        $.ajax({
            url: 'https://myanimelist.p.rapidapi.com/anime/21',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '491ab05f3amshab7dc2f909556ccp15047cjsn95f6d67bb1a2',
                'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
            },
            success: function(data) {
                var synopsis = data.synopsis;
                $("#animeTable").append("<tr><td>"+synopsis+"</td></tr>");
            }
        });
    });
});