// Video.js
import React, { useState ,useRef } from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NearMeIcon from "@material-ui/icons/NearMe";
import "./css/Video.css";
import Ticker from 'react-ticker';
import { Avatar } from '@material-ui/core';

function Video({id,src,title,description}) 
{
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);
  const [likes,setLikes]=useState(1);
  const [dislikes,setDislikes]=useState(1);
  const [comment,setComments]=useState(1);
  const [shares,setShares]=useState(1);

  function handleComment(){
    setComments(comment+1);
  }
  function handleLikes(){
    setLikes(likes+1);
  }
  function handleDislikes(){
    setDislikes(dislikes+1);
  }
  function handleShares(){
    setShares(shares+1);
  }
  
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);
    }
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  return (
    <div className="video">
      <video
        id={id}
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={src}
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon
             onClick={handleLikes}
             />
            
            <p>{likes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon 
            onClick={handleDislikes} />
            <p>{dislikes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon 
            onClick={handleComment} />
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <NearMeIcon 
            onClick={handleShares} />
            <p>{shares}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="description">{description}</p>
                </>
              )}
            </Ticker>
          </div>
          <div className="shortDetails">
            <Avatar
              src={
                "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
              }
            />
            <p>{title}</p>
            <button
              style={{
                background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Video;










































// {
 
  //   const [playing,setPlaying]=useState(false);
  //   const [subscribe,setSubscribe]=useState(false);
  //   const videoRef= useRef(null);
  
  //    const handleVideo=()=>{
  //     if(playing){
  //       setPlaying(false);
  //       videoRef.current.pause();
  //     }else{
  //       videoRef.current.play();
  //       setPlaying((play)=>!play)
  //     }
  //    }
  //    const handleSubscribe=()=>{
  //      setSubscribe((subs)=>!subs);
  //    }
  
  //   return (
  //     <div className='video'>
  //       <video
  //         onClick={handleVideo}
  //         id={id}
  //         className="video__player"
  //         src={src}
  //         ref={videoRef}
  //         loop
  //       />
  //       <div className='shortsContainer'>
  //         <div className='shortsVideoTop'>
  //           <div className='shortsVideoTopIcon'>
  //             <ArrowBackIcon />
  //           </div>
  //           <div className='shortsVideoTopIcon'>
  //             <MoreVertIcon />
  //           </div>
  //         </div>
  //         <div className='shortsVideoSideIcons'>
  //           <div className='shortsVideoSideIcon'>
  //             <ThumbUpIcon />
  //             <p>600</p>
  //           </div>
  //           <div className='shortsVideoSideIcon'>
  //             <ThumbDownIcon />
  //             <p>600</p>
  //           </div>
  //           <div className='shortsVideoSideIcon'>
  //             <InsertCommentIcon />
  //             <p>600</p>
  //           </div>
  //           <div className='shortsVideoSideIcon'>
  //             <NearMeIcon />
  //             <p>600</p>
  //           </div>
  //           <div className='shortsBottom'>
  //             <div className='shortsDesc'>
  //               <Ticker >
  //                 {({ index }) => (
  //                   <>
  //                     <p className='description'>
  //                       This is description
  //                     </p>
  //                   </>
  //                 )}
  //               </Ticker>
  //             </div>
  //             <div className="shortDetails">
  //               <Avatar />
  //               <p>Channel Name</p>
  //               <button style={{
  //                 background : subscribe ? "red" : "hsla(0,0% , 69.4% , 0.609)",
  //               }} 
  //               onClick={handleSubscribe}>{
                  
  //                 subscribe ? "SUBSCRIBED" :"SUBSCRIBE"
  //               }
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }