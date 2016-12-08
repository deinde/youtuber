//creating a new component 
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const  API_KEY = 'AIzaSyCH2g2DV81sV8gbvXI11lzY97NzEToixxo';
YTSearch({key:API_KEY,term:'surfboards'}, function(data){
	console.log(data);
});

const App = () =>{
	return(
          <div>
	        <SearchBar/>
	       </div>
	      ) 
}


// const App = React.create(){
  // render(
  //  return{

  //      }

  // 	)
// }
//
ReactDom.render(<App />,document.querySelector('.container'));