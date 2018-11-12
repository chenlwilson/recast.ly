class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allVideos: props.videos,
      currentVideo: props.videos[0]
    };
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  changeVideoList(list) {
    this.setState({
      allVideos: list
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickVideo={this.changeCurrentVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

