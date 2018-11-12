var searchYouTube = (option, callback) => {
  // TODO{query ='tennis', max = 5, key = window.YOUTUBE_API_KEY}, function(data) {console.log(data)}

  $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        data: {
          part: 'snippet',
          order: 'relevance',
          q: 'tennis',
          maxResults: 5,
          videoEmbeddable: true,
          key: window.YOUTUBE_API_KEY
        },
        dataType: 'json',
        success: function(data) {
          console.log(data);
          callback();
        },
        error: function(error) {
          console.log('Youtube: Failed to fetch messages', error);
        }
      });
  // console.log('Hi');
};

window.searchYouTube = searchYouTube;


// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// },
