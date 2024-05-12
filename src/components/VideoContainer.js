import { useEffect, useState } from 'react'
import VideoCard, {AdVideo} from './VideoCard'
import {YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap '>
      <AdVideo info={videos[0]}/>
      {videos.map(video => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
      
    </div>
  )
};

export default VideoContainer