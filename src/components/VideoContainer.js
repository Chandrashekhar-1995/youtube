import { useEffect } from 'react'
import VideoCard from './VideoCard'
import { TOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {

  useEffect(()=>{
    getVideo();
  },[]);

  const getVideo = async()=>{
    const data = await fetch(TOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>
        <VideoCard/>
    </div>
  )
}

export default VideoContainer