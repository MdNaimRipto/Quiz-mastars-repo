import React from 'react';


const Option = ({ option, handleAnswer, cardsDisabled }) => {

    return (
        <button
            type='button'
            disabled={cardsDisabled}
            onClick={(e) => { handleAnswer(e) }}
            className="p-5 w-full shadow shadow-black rounded">
            {option}
        </button>
    );
};

export default Option;