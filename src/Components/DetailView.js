import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {
    const {id, name, sprite, type, ability} = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite" />
      <div className='data-wrapper'>
        <h1 className='data-name'>#: {id} {name}</h1>
        <p className="data-char">Type: {type}</p>
        <p className="data-chars">Ability: {ability}</p>
      </div>
    </section>
  )
}

export default DetailView;