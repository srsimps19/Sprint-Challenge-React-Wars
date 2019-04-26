import React from 'react';
import Characters from './Characters';
import './character.scss';

function CharactersList(props) {
    return(
        <div className="characters-list">
            {props.starwarsChars.map(char => (
                <Characters  char={char} key={char.name} componentDidMount={props.componentDidMount}/>
            ))}
        </div>
    )
}

export default CharactersList;