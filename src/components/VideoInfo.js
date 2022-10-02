import Comments from './Comments'
import {useState} from "react"

function VideoInfo({videoData}){
    //console.log(videoData)
    
    const [videoInfo, setVideoInfo] = useState(videoData)
    const [isVisible, setIsVisible] = useState(true)
  
    function handleLikes(){       
      const video = {...videoInfo};
      video.upvotes = video.upvotes + 1;
      setVideoInfo(video)
    }

    function handleDisLikes(){       
        const video = {...videoInfo};
        video.downvotes = video.downvotes + 1;
        setVideoInfo(video)
    }

    function handleVisibility(){
        setIsVisible(!isVisible)
    }

    return(
        <div>
        <iframe
            width="919"
            height="525"
            src={videoInfo.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoInfo.title}
        />
        <h1> {videoInfo.title} </h1>
        <span> {videoInfo.views} views | Uploaded { videoInfo.createdAt} </span>
            <button onClick={handleLikes}> {videoInfo.upvotes} 👍 </button>
            <button onClick={handleDisLikes}> {videoInfo.downvotes} 👎 </button>
            <button onClick={handleVisibility}> { isVisible ? "Hide Comments" : "Show Comments"} </button>
                {isVisible ? <Comments comments={videoInfo.comments}/>  : ''}
        </div>             
    )
}

export default VideoInfo;
