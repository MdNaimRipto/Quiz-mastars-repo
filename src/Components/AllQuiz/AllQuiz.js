import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const quizzes = useLoaderData();
    console.log(quizzes)

    return (
        (<div>
            <h2 className='text-4xl mt-8 text-sky-600 font-semibold'>Quiz of {quizzes.data.name}</h2>
            {
                quizzes.data.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>)
    );
};

export default AllQuiz;