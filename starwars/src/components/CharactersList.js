import React from 'react';
import Characters from './components/Characters';

function CharactersList(props) {
    return(
        <div className="characters-list">
            {props.starwarsChars.map(char => (
                <Characters  char={char} key={char.name}/>
            ))}
        </div>
    )
}

export default CharactersList;