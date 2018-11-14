var searchYouTube = (options, callback) => {
  // input:
  //{query ='tennis', max = 5, key = window.YOUTUBE_API_KEY}
  //function(data) {console.log(data)}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    order: 'relevance',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: true,
    type: 'video'
  })
    .done(function(data) {
      console.log('success');
      console.log(data);
      callback(data.items);
    })
    .fail(function(data) {
      console.log('Youtube: Failed to fetch messages', data);
    });
};

window.searchYouTube = searchYouTube;
