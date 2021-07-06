var search = document.getElementById("drop-down");
var lastContainer = document.getElementById("LastFM")
var genreType = document.getElementById("Genres")

search.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag='+genreType+'&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

function renderHTML(data) {
var artist = ""
var artIMG = document.createElement('img')

for (i = 0; i < data.length; i++) {
  artist += "<p>" + data[i].name + "is rank" + data[i].rank + data[i].image + ".</p>";
  artIMG.src = data[i].image
}
lastContainer.insertAdjacentHTML('beforeend', artist, artIMG)
}





function genreName(genre) {

  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag="+ genreType +"&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json";

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
      console.log(response);
  });
}