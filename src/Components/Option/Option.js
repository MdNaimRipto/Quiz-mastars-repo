import React from 'react';


const Option = ({ option, handleAnswer, cardsDisabled }) => {

    return (
        <button
            type='button'
            disabled={cardsDisabled}
            onClick={(e) => { handleAnswer(e) }}
            className="p-5 w-full rounded box-shadow mt-4">
            {option}
        </button>
    );
};

export default Option;