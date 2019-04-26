import React from 'react';

function Characters(props) {
    let classNames = "character"
    console.log(props)
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