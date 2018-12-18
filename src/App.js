import React, { Component } from 'react';
import './App.css';
import PokeList from './Components/PokeList';
import DetailView from './Components/DetailView';
import Pokemon from './Pokemon';


class App extends Component {
  // constructor: where we initialize our state
  constructor() {
    // In the constructor, we always have to call the super() function since we are extending from the component class.
    super();
    this.state = {
      pokemon:{}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

handleOnClick(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => {
    const pokemon = new Pokemon(data);

    this.setState({pokemon});
  })
  .catch(err => console.log(err))
} 
//  The render method. This method always returns jsx syntax, which is a mix of javaScript and html. The render method can only return one element so we need to create a parent element and nest children inside. If we are returning a nested element we need to wrap it with parentheses.

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
