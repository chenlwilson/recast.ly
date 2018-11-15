var VideoDetails = (props) => (
  <div className="video-player">
    <h3>{props.video.snippet.title}</h3>
    <div>{props.video.snippet.description}</div>
    <div>Published on {props.video.snippet.publishedAt.split('T')[0]}</div>
    <div>Channel: {props.video.snippet.channelTitle}</div>
    <div>Category Index: {props.video.snippet.categoryId}</div>
    <div>Audio Language: {props.video.snippet.defaultAudioLanguage}</div>
    <div>Video eTag: {props.video.etag}</div>
    <div>Video ID: {props.video.id.videoId}</div>
    <div>Channel ID: {props.video.snippet.channelId}</div>
    <em><div className="details" onClick={()=>{ props.showLessDetails(); }}>Show Less Details</div></em>
  </div>
);

VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoDetails = VideoDetails;