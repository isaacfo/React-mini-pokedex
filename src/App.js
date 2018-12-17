import React, { Component } from 'react';
import './App.css';
import PokeList from './Components/PokeList';
import DetailView from './Components/DetailView';
import Pokemon from './Pokemon';


class App extends Component {
  constructor() {
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
