var ToggleButton = (props) => (
  <div className="video-player">
    <p className="details">Autoplay
      <label className="switch">
        <input type="checkbox" onClick={()=>{ props.toggleAutoplay(); }}/>
        <span className="slider round"></span>
      </label>
    </p>
  </div>
);