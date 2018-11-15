var VideoPlayerAutoOff = (props) => (
  <div className="video-player">
    <h5>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
      </div>
    </h5>
    <div>
      <em><div className="details" onClick={()=>{ props.showVideoDetails(props.video); }}>More Details</div></em>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayerAutoOff.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayerAutoOff = VideoPlayerAutoOff;
