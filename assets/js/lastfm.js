var RapHipHop
var Indiefolk
var Jazz
var Reggae
var ElectronicDance
var Country
var Blues
var Classical
var Rock
var RNB
var Alternative












function pulltopartist(genre) {
  top(genre)
}

  var queryURL =
    "http://ws.audioscrobbler.com//2.0/?method=chart.gettopartists&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json&" + genre;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
