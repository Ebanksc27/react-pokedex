import React from 'react';

function Pokecard({ id, name, type, base_experience}) {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/main/sprites/pokemon/${id}.png`;
    return (
        <div className='pokecard'>
            <h1>{name}</h1>
            <img src={imgSrc} alt={name}/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}

export default Pokecard;