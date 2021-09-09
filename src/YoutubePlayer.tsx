import React from 'react';
import YouTube from 'react-youtube';
import AddSong from './AddSong';

let myRef:any;
let videoId:string
type MyProps = {value: string};

class YouTubePlayer extends React.Component{
  constructor(props) {
    super(props);
    myRef = React.createRef();
    //this.state = {date: new Date()};

  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      autoplay: 1
    };


    return (
      <div>
        <YouTube ref={myRef} videoId="YQAd0PKD6Do" opts={opts} onEnd={this._onEnd} />
        <AddSong parentCallback = {this.callbackFunction}/>
        <p> {this.state.date.toLocaleTimeString()} </p>
      </div>

    );
  }

  _onEnd(event:any) {
    /*event.target.pauseVideo();
    event.target.videoId = 'YQAd0PKD6Do'*/


    event.target.loadVideoById(videoId)
  }

  callbackFunction = (childData:string) => {
      videoId = childData.toString();

      //event.target.loadVideoById(videoId);
      myRef.current.internalPlayer.loadVideoById(videoId)

  }
}
export default YouTubePlayer;
