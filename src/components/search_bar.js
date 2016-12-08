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
    return <input onChange ={(event)=>this.setState({term:event.target.value})}/>
  }
   //verbose syntax refactored to condence
   //return <input onChange ={this.onInputChange}/>
  // onInputChange=(event)=>{
  //   console.log(event.target.value)
  // }
}


export default SearchBar;
