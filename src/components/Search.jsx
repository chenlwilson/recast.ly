//Complete connecting app to the YouTube API
//Complete creating reusable API helper
var Search = (props) => (
  <div>
    <h5>
      <em>
        <div className="search-bar form-inline">
          <input className="form-control" type="text"/>
          <button className="btn hidden-sm-down" onClick={()=>{ props.searchVideo($('.form-control').val()); }}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      </em>
    </h5>
  </div>
);

window.Search = Search;
