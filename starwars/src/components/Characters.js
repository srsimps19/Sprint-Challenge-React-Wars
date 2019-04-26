import React from 'react';
import './character.scss';

function Characters(props) {
    let classNames = "character"
    return (
        <div className={classNames}>
            <h3>{props.char.name}</h3>
            <p>
                <strong>Birth Year: </strong> {props.char.birth_year}
            </p>
        </div>
    );
};

export default Characters;