import React from 'react';




//individual video that gets mapped and contained in VideoList
const VideoListItem =({vidz,onVideoSelect})=>{

	const imageUrl = vidz.snippet.thumbnails.default.url;
	return(
    <li onClick={()=>onVideoSelect(vidz)} className='list-group-item'>
     <div className='video-list media'>
      <div className='media-left'>
      <img className='media-object' src={imageUrl}/>
      </div>
     </div>
     <div className='media-body'>
      <div className='media-heading'>{vidz.snippet.title}</div>
     </div>
    </li>

		)
}


export default VideoListItem;
