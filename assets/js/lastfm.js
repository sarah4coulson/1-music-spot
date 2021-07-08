var x = document.getElementById("button");


x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Hip-Hop&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Indie&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Jazz&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Rock&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Reggae&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Dance&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Country&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Blues&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})


x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Classical&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
      var artData = JSON.parse(lastData.responseText);
      console.log(artData);
      console.log(lastData)
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=RNB&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
  };
  lastData.send();
})

x.addEventListener("click", function(){
  var lastData = new XMLHttpRequest ();
  lastData.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=Alternative&page&limit=5&api_key=b2eec550419a940827175fdc3ac752b7&format=json');
  lastData.onload = function() {
    console.log
  };
  lastData.send();
})



function renderHTML(data) {
  var artIMG = document.createElement('img')
  
  for (i = 0; i < data.length; i++) {
    artist += "<p>" + data[i].name + data[i].rank + data[i].image + ".</p>";
    artIMG.src = data[i].image
  }
  lastContainer.insertAdjacentHTML('beforeend', artist, artIMG)
  }
  