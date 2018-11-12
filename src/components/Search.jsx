var Search = () => (

  // var options = {
  //   query:$('.form-control').val(),
  //   max: 5,
  //   //key: window.YOUTUBE_API_KEY
  // }

  // var callBack = function(data) {
  //     console.log(data);
  //     App.changeVideoList(data);
  // }

    <div>
    <h5>
      <em>
        <div className="search-bar form-inline">
            <input className="form-control" type="text"/>
            <button className="btn hidden-sm-down" onClick={()=>{searchYouTube({query ='tennis', max = 5, key = window.YOUTUBE_API_KEY}, function() {console.log('success')})}}>
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
