// API Call to Napster

function genreName(Name) {

    var napsterAPIKey = 'ZGE2ZTkzODgtZDc0Yy00MzdhLTk4Y2YtNDA4YjMzMTlkNjY3';
    var queryURL = "https://api.napster.com/v2.2/"+ Name + "/g.397/artists/top?apikey=ZGE2ZTkzODgtZDc0Yy00MzdhLTk4Y2YtNDA4YjMzMTlkNjY3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
}

