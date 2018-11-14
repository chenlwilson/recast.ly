//Complete connecting app to the YouTube API
//Complete creating reusable API helper
var Search = (props) => (
  <div>
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(event)=>{ props.searchVideo(event.target.value); }} />
      <button className="btn hidden-sm-down" onClick={() => { props.searchVideo(props.query); }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  </div>
);

window.Search = Search;
