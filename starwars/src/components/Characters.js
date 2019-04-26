import React from 'react';

function Characters(props) {
    return (
        <div className="char-card">
            <h3>{props.character.name}</h3>
            <p>
                <strong>Birth Year: </strong> {props.characters.birthYear}
            </p>
        </div>
    );
};

export default Characters;