import React from 'react';

function Characters(props) {
    let classNames = "character"
    return (
        <div className={classNames}>
            <h3>{props.character.name}</h3>
            <p>
                <strong>Birth Year: </strong> {props.character.birthYear}
            </p>
        </div>
    );
};

export default Characters;