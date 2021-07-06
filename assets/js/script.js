var RapHipHop = ['Eminem', 'Drake', 'J.Cole', 'Kanye West', '2Pac'];
var Indiefolk = ['Arctic Monkeys', 'Radiohead', 'The Killers', 'Simon & Garfunkel', 'Jason Isbell'];
var Jazz = ['Miles Davis', 'Frank Sinatra', 'Kenny G', 'Louis Armstrong', 'George Benson'];
var Reggae = ['Bob Marley', 'Sublime', 'Sean Paul', 'Shaggy', 'Burning Spear'];
var ElectronicDance =['Daft Punk', 'Lady Gaga', 'Michael Jackson', 'Madonna', 'Kaskade'];
var Country = ['Morgan Wallen', 'Luke Combs', 'George Strait', 'Kenny Chesney', 'Luke Bryan'];
var Blues = ['Tom Waits', 'Eric Clapton', 'Jimi Hendrix', 'The Rolling Stones', 'B.B. King'];
var Classical = ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'The Piano Guys', 'Nils Frahm'];
var Rock = ['The Beatles', 'Queen', 'Led Zeppelin', 'AC/DC', 'Pink Floyd'];
var RNB = ['Beyonce', 'Usher', 'The Weeknd', 'Chris Brown', 'Rihanna'];
var Alternative = ['Linkin Park', 'Green Day', 'My Chemical Romance', 'Imagine Dragons', 'Panic! at the Disco'];


// API Call to Napster

function genreName(Name) {

    var napsterAPIKey = 'ZGE2ZTkzODgtZDc0Yy00MzdhLTk4Y2YtNDA4YjMzMTlkNjY3';
    var queryURL = "https://api.napster.com/v2.2/"+ Name + "/g.397/artists/top?limit=5?apikey=ZGE2ZTkzODgtZDc0Yy00MzdhLTk4Y2YtNDA4YjMzMTlkNjY3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
}

