import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {closeMenu} from "../utils/store/appSlice"
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu())
  },[])
  return (
    <div className='flex flex-col'>
    <div className='m-5 p-2 flex flex-col'>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      </div>
      <CommentsContainer/>
      </div>
  )
}

export default WatchPage