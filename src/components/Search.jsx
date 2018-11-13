var Search = () => (
    <div>
    <h5>
      <em>
        <div className="search-bar form-inline">
            <input className="form-control" type="text"/>
            <button className="btn hidden-sm-down" onClick={()=>{searchYouTube({query:'tennis', max: 5, key: window.YOUTUBE_API_KEY}, function(item) {console.log(item)})}}>
              <span className="glyphicon glyphicon-search"></span>
            </button>
         </div>
        </em>
      </h5>
    </div>

);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
