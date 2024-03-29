import hamburgerMenu from "../static/hamburgerMenu.png";
import YouTubeLogo from "../static/YouTubeLogo.png";
import userIcon from "../static/userIcon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Header = () => {
  const dispatch =useDispatch();

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
      <input type="text" placeholder="Search" className="w-1/2 border border-gray-400 p-2 rounded-l-full"/>
      <button className="border border-gray-400 py-2 px-5  rounded-r-full">🔍</button>
    </div>
    <div>
      <img alt="user icon" src={userIcon} className=" col-span-1 h-10"/>
    </div>
    </div>
  )
}

export default Header