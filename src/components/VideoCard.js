
const VideoCard = ({ info }) => {
  if (info === undefined) return;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};


export const AdVideo = ({ info }) => {
  return (
    <div className="m-2 p-2 border border-red-800">
     <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard