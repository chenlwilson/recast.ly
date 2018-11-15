class App extends React.Component {
  constructor (props) {

    super(props);

    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);
    this.searchVideo = this.searchVideo.bind(this);
    this.showVideoDetails = this.showVideoDetails.bind(this);
    this.showMoreDetails = this.showMoreDetails.bind(this);
    this.showLessDetails = this.showLessDetails.bind(this);

    this.state = {
      allVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: 'tennis',
      showDetails: false
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

  changeVideoList(list) {
    this.setState({
      allVideos: list,
      currentVideo: list[0],
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
      query: query
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

  render() {

    let searchVideo = _.debounce((e) => { this.searchVideo(e); }, 500);
    let videoDetails;

    if (this.state.showDetails) {
      videoDetails = <VideoDetails showLessDetails={this.showLessDetails} video={this.state.currentVideo}/>;
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
            <VideoPlayer showVideoDetails={this.showVideoDetails} video={this.state.currentVideo}/>
            {videoDetails}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickVideo={this.changeCurrentVideo}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
