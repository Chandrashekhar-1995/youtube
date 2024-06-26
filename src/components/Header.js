import hamburgerMenu from "../static/hamburgerMenu.png";
import YouTubeLogo from "../static/YouTubeLogo.png";
import userIcon from "../static/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/store/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store)=>store.search)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else 
      getSearchSuggestions()
    }, 200);
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])
  
  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1])

    dispatch(
      cacheResults({
      [searchQuery] : json[1],
      })
    )
  }

  const toggleMenuHandler =()=> {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-8 shadow-lg">
    <div className="flex col-span-1">
      <img onClick={()=>toggleMenuHandler()} alt="menu logo" src={hamburgerMenu} className=" h-8" />
      <img alt="Youtube Logo" src={YouTubeLogo} className=" h-8 mx-2"/>
    </div>
      <div className=" col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)} 
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5  rounded-r-full">🔍</button>
        </div>
        {showSuggestions && (<div className="fixed bg-white py-2 px-5 w-[37rem] rounded-lg shadow-lg border border-gray-100 ">
          <ul>
            {suggestions.map(s=><li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
            
          </ul>
        </div>)}
    </div>
    <div>
      <img alt="user icon" src={userIcon} className=" col-span-1 h-10"/>
    </div>
    </div>
  )
}

export default Header