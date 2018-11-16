class App extends React.Component {
  constructor (props) {

    super(props);

    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);
    this.searchVideo = this.searchVideo.bind(this);
    this.showVideoDetails = this.showVideoDetails.bind(this);
    this.showMoreDetails = this.showMoreDetails.bind(this);
    this.showLessDetails = this.showLessDetails.bind(this);
    this.toggleAutoplay = this.toggleAutoplay.bind(this);
    this.nextPageVideo = this.nextPageVideo.bind(this);

    this.state = {
      allVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: 'tennis',
      showDetails: false,
      autoplayOn: false,
      pageToken: ''
    };
  }

  componentDidMount() {
    this.searchVideo(this.state.query);
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  changeVideoList(data) {
    this.setState({
      allVideos: data.items,
      currentVideo: data.items[0],
      pageToken: data.nextPageToken
    });
  }

  searchVideo(query) {
    var youtubeQuery = {
      query: query,
      max: 5,
      key: this.props.apiKey
    };
    this.props.searchYouTube(youtubeQuery, this.changeVideoList);
    this.setState({
      query: query,
    });
  }

  showVideoDetails(video) {
    this.props.getVideoDetails({
      id: video.id.videoId,
      key: this.props.apiKey
    }, this.showMoreDetails);
  }

  showMoreDetails() {
    this.setState({showDetails: true});
  }

  showLessDetails() {
    this.setState({showDetails: false});
  }

  toggleAutoplay() {
    this.setState({autoplayOn: !this.state.autoplayOn});
  }

  nextPageVideo() {
    this.props.getNextPage({
      pageToken: this.state.pageToken,
      key: this.props.apiKey,
      query: this.state.query
    }, this.changeVideoList);
  }

  render() {

    let searchVideo = _.debounce((e) => { this.searchVideo(e); }, 500);
    let videoDetails, videoPlayer;

    if (this.state.showDetails) {
      videoDetails = <VideoDetails showLessDetails={this.showLessDetails} video={this.state.currentVideo}/>;
    }

    if (this.state.autoplayOn) {
      videoPlayer = <VideoPlayerAutoOn showVideoDetails={this.showVideoDetails} video={this.state.currentVideo}/>;
    } else {
      videoPlayer = <VideoPlayerAutoOff showVideoDetails={this.showVideoDetails} video={this.state.currentVideo}/>;
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchVideo={searchVideo} query={this.state.query}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {videoPlayer}
            <ToggleButton toggleAutoplay={this.toggleAutoplay}/>
            {videoDetails}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickVideo={this.changeCurrentVideo} nextPageVideo={this.nextPageVideo}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
