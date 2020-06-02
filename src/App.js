import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import  {CardList}  from "./components/card-lists/card-list";
import {SearchBox} from './components/searchBox/search-box';
class App extends Component {
  //Component is part of the react library (includes componentDidMount() etc)
  //Dont need super or constructor when not using "this.state"
  state = {
    monsters: [],
    searchField: ''
  };
  //Axios automatically stringifies JSON data unlike fetch()
  componentDidMount() {
    //Called after render()
    axios
      .get("http://jsonplaceholder.typicode.com/users") //Fetch data
      .then((response) => {
        this.setState({ monsters: response.data });
      })
      .catch((error) => {
        console.log(error); //log any errors
      });
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const { monsters, searchField } = this.state; //Destructuring
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
       <SearchBox 
       placeholder = 'search monsters'
       handleChange = {this.handleChange} //this..() shouldn't be used in an event handler as it envokes the function as soon as render is called  
       />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
