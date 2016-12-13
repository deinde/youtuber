import React from 'react';
import VideoListItem from './video_list_item.js'

const VideoList =(props)=>{
 const videolist_all = props.videoz.map((vid)=>{
  	return <VideoListItem 
  	onVideoSelect = {props.onVideoSelect}
  	key={vid.etag}
  	vidz={vid}/>
  })
  
	return(
   <ul className='col-md-4 list-group'>
     {videolist_all}
      
   </ul>
  )
}


export default VideoList;