import React, {Component} from 'react';


//pure functional component
// const SearchBar = ()=>{
// 	return <input/>
// }

//class component used for self awareness and to keep track of what was inputed
class SearchBar extends Component{
   constructor(props){
   	super(props);
   	//initial state
   	this.state = {term:''};
   }
  render(){

    return(
    	<div className='search-bar app'>
        <input   onChange ={event=>this.onInputChange(event.target.value)}/>
      
       </div>
     )
  }
   //verbose syntax refactored to condence
   //return <input onChange ={this.onInputChange}/>
  // onInputChange=(event)=>{
  //   console.log(event.target.value)
  // }
  onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
