import React from 'react';
import './styles/PokeCell.css';
// import { pokeClasses } from '../pokeClasses';
import Sprites from '../Assets/Sprites.png';


const PokeCell = ({pokeClass, handleOnClick}) => {
    const {id, backgroundPosition} = pokeClass;
    const style = {backgroundImage:`url(${Sprites})`, backgroundPosition};

    return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};


export default PokeCell;