import { Link } from "react-router-dom";

const MenuItem = () => {

  return (
    <div className="p-6 shadow-lg w-48 divide-y-2">
      <ul>      
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subcriptions</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">You</h1>
        <li>History</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <li>History</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">Explore</h1>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">More from Youtube</h1>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      <ul>
        <li className="pt-5">Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  )
}

export default MenuItem;