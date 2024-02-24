import { useEffect,useState } from 'react';
import './App.css';
import Video from './component/Video';
import ytVideos from "./component/Videos"

function App() {
  const [video,setVideo]=useState([]);
  useEffect(()=>{
    setVideo(ytVideos);
  },[]);
  return (
    <div className="app">
    <div className='app__video'>
    {
      video.map((vid) => (
        <Video id={vid.id} src={vid.url} title={vid.title} description={vid.description}/>
      ))
    }
    
    </div>
    </div>
  );
}

export default App;
