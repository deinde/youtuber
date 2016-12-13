//creating a new component 
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

import _ from 'lodash';
const  API_KEY = 'AIzaSyCH2g2DV81sV8gbvXI11lzY97NzEToixxo';


class App extends Component{
	constructor(props){
		super(props);
		this.state ={
			videos:[],
			selectedVideo:null,
    };
    

  this.videoSearch('surfboard')


}

    videoSearch(term){
					YTSearch({key:API_KEY,term:term}, (videos)=>{
	  // this.setState({videos:data})
	  //since the argument and the property are the same you can just use 
	  //'videos' instead with es6 sugar
	  this.setState({
	  	videos:videos,
	  	selectedVideo:videos[0]
	 		});
 		});
	}
	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return(
			  
			  
          <div className='app'>
	        <SearchBar onSearchTermChange={videoSearch} className="app"/>
	        <VideoDetail video={this.state.selectedVideo} />
	        <VideoList 
	        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
	        videoz={this.state.videos}/>

	       </div>
	    ) 
	}
}


ReactDom.render(<App />,document.querySelector('.container'));