import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = (props) => {
    const { correctAnswer, question, options } = props.quiz
    const handleAnswer = (e) => {

        if (e.target.innerText === correctAnswer) {
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
    }
    const handleClick = () => {
        this.setState({
            disabled: true,
        });
    }
    return (
        <div className='container mx-auto mt-12'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h2 className='text-1xl md:text-2xl mb-5 text-justify'>{question}</h2>
                <FontAwesomeIcon className='ml-10' icon={faEye}></FontAwesomeIcon>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-5'>
                {
                    options.map((option, index) =>
                        <Option
                            option={option}
                            key={index}
                            index={index}
                            correctAnswer={correctAnswer}
                            handleAnswer={handleAnswer}
                            handleClick={handleClick}
                        ></Option>)
                }
            </div>
        </div >
    );
};

export default Quiz;