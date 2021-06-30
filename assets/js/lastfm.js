// <script type="text/javascript" src="lastfm.api.md5.js"></script> 
// <script type="text/javascript" src="lastfm.api.js"></script> 
// <script type="text/javascript" src="lastfm.api.cache.js"></script> 
// <script type="text/javascript" src="json2.js"></script> 





http://ws.audioscrobbler.com//2.0/?method=chart.gettopartists=rap&api_key=b2eec550419a940827175fdc3ac752b7





/* Create a cache object */
var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : 'b2eec550419a940827175fdc3ac752b7',
  apiSecret : 'aa5ac1c62091d25d601b6365b9844cd1',
  cache     : cache
});

/* Load some artist info. */
lastfm.artist.getInfo({artist: ''}, {success: function(data){
  /* Use data. */
}, error: function(code, message){
  /* Show error message. */
}});