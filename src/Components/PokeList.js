import React, {Component} from "react";
import PokeCell from './PokeCell'
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css'; 



// class PokeList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pokemon: [],
//             allPokemon:[]
//         }
//     }


// componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
// componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(r => r.json())
//     .then(pokemonArray => {
//         console.log(Object.values(pokemonArray)[3])
//     //   console.table(Object.values(pokemonArray))

//       this.setState({
//         allPokemon: Object.values(pokemonArray)[3]
//       })
//     })
// }

// render() {
//     const pokemonArray = this.state.pokemon.map(onePokemon => {
//         return (
//             <div>
//                 <img src={onePokemon.url} alt={onePokemon.name}/>
//             </div>
//         )
//     })   

    
//     return (
//         <div>
//             {pokemonArray}
//         </div>
//     )
// }




const PokeList = ({handleOnClick}) => {
    const cells = pokeClasses.map(pokeClass => { 
        return (
            <PokeCell
            key ={pokeClass.id}
            pokeClass={pokeClass}
            handleOnClick={handleOnClick}
            />

        );
    });
    return (
        <section className="poke-list">
          {cells}
        </section>
    )

}















export default PokeList;