//creating a new component 
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const  API_KEY = 'AIzaSyCH2g2DV81sV8gbvXI11lzY97NzEToixxo';


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