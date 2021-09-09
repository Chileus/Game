import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header_bar from './Header';
import YouTubePlayer from './YoutubePlayer';



function App() {
  return (
    <div className="App">
      <Header_bar />
      <YouTubePlayer />

    </div>
  );
}

export default App;
