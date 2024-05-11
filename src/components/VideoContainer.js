import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import {YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideo();
  },[]);

  const getVideo = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap '>
      {videos.map(video => (
        <Link to={"watch?v="+video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
      
    </div>
  )
}

export default VideoContainer