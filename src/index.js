
// TODO: Render the `App` component to the DOM
ReactDOM.render(
  <App searchYouTube={window.searchYouTube} apiKey={window.YOUTUBE_API_KEY} getVideoDetails={window.getVideoDetails}/>,
  document.getElementById('app')
);
