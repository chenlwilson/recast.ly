var getVideoDetails = (options, callback) => {
  // input:
  //{query ='tennis', max = 5, key = window.YOUTUBE_API_KEY}
  //function(data) {console.log(data)}

  $.get('https://www.googleapis.com/youtube/v3/videos', {
    id: options.id,
    part: 'snippet',
    key: options.key,
  })
    .done(function(data) {
      console.log('success: fetched more video details');
      console.log(data);
      callback(data.items[0]);
    })
    .fail(function(data) {
      console.log('Youtube: Failed to fetch messages', data);
    });
};

window.getVideoDetails = getVideoDetails;