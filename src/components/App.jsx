class App extends React.Component {
  constructor (props) {
    super(props);
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);
    this.searchVideo = this.searchVideo.bind(this);
    this.state = {
      allVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: 'tennis'
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

  render() {

    var searchVideo = _.debounce((e) => { this.searchVideo(e); }, 500);

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchVideo={searchVideo} query={this.state.query}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
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
