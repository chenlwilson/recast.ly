var getNextPage = (options, callback) => {
  // input:
  //{query ='tennis', max = 5, key = window.YOUTUBE_API_KEY}
  //function(data) {console.log(data)}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    order: 'relevance',
    key: options.key,
    q: options.query,
    pageToken: options.pageToken
  })
    .done(function(data) {
      console.log('next page success');
      console.log(data);
      callback(data);
    })
    .fail(function(data) {
      console.log('Youtube: Failed to fetch next page', data);
    });
};

window.getNextPage = getNextPage;
