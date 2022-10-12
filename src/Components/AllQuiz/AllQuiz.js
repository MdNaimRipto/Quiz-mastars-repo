import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {
    const quizzes = useLoaderData();

    return (
        (<div>
            {
                quizzes.data.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>)
    );
};

export default AllQuiz;