import React, { useState } from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = (props) => {

    const { correctAnswer, question, options, } = props.quiz
    const answer = correctAnswer.replace(/\s+/g, ' ').trim()

    const [cardsDisabled, setCardsDisabled] = useState(false);
    const disableAllCards = () => setCardsDisabled(true)

    const handleAnswer = (e) => {
        if (e.target.innerText === answer) {
            e.target.style.backgroundColor = "#3fa93f"
            e.target.style.color = "#FFFFFF"
            toast.success("Congratulations, Correct Answer", {
                duration: 2000,
                style: {
                    border: '1px solid #80808082',
                    boxShadow: "none",
                    width: "350px",
                    borderRadius: "10px"
                },
            })
        }
        else {
            e.target.style.backgroundColor = "#ff1f1f"
            e.target.style.color = "#FFFFFF"
            toast.error("Wrong answer. Need More Hard Work", {
                duration: 2000,
                style: {
                    border: '1px solid #80808082',
                    boxShadow: "none",
                    width: "350px",
                    borderRadius: "10px"
                },
            })
        }
        disableAllCards()
    }
    const handleShowAnswer = () => {
        toast.success(`Correct Answer: ${correctAnswer}`, {
            duration: 4000,
            style: {
                border: '1px solid #80808082',
                boxShadow: "none",
                width: "350px",
                borderRadius: "10px"
            },
        })
        disableAllCards()
    }
    return (
        <div className='container mx-auto my-12'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div>
                <div className='flex justify-between items-center container mx-auto w-[96%]'>
                    <h2
                        className='text-1xl md:text-2xl mb-5 text-justify font-semibold'>{question}
                    </h2>
                    <FontAwesomeIcon
                        onClick={handleShowAnswer}
                        disabled={cardsDisabled}
                        className='ml-10 cursor-pointer'
                        icon={faEye}></FontAwesomeIcon>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-5'>
                    {
                        options.map((option, index) =>
                            <Option
                                option={option}
                                key={index}
                                index={index}
                                handleAnswer={handleAnswer}
                                cardsDisabled={cardsDisabled}
                            ></Option>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Quiz;