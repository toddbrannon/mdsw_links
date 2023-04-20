import React from 'react'
import '../styles.css'


const LandingPage = () => {
  return (
    <div className="flex-container">
      <div className="white"><h1></h1></div>
      <div className="pink">
        <div className="btn-container">
          <a href="https://www.youtube.com/channel/UCmLxFyNAqP5KUqjsk-WFBQA" target="_blank" className="btn">YouTube</a>
          <a href="https://www.youtube.com/watch?v=T1BbFI3VokI&list=PLrVRiw0drJlZSpsOJ38XJumBEprV_m3FC" target="_blank" className="btn">Podcast Playlist</a>
          {/* <a href="" target="_blank" className="btn">Facebook</a> */}
          <a href="" target="_blank" className="btn">Shop</a>
          {/* <a href="" target="_blank" className="btn">ETSY</a> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage