import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../ContextApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Option() {
    const { data, setcount, count, api, Correct, setCorrect, wrong, setwrong, setCountdown } = useContext(Context);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [rightanswer, setrightanswer] = useState("")


    useEffect(() => {
        if (data && data.results && data.results.length > 0) {
            const currentQuestion = data.results[0];
            if (currentQuestion) {
                const allAnswers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
                setAnswers(shuffleArray(allAnswers));
                setCorrectAnswer(currentQuestion.correct_answer);
                setSelectedAnswer(null);
                setrightanswer(currentQuestion.correct_answer)
            }
        }
    }, [data]);

    const rightanswers = (answer) => {
        setSelectedAnswer(answer);
        if (answer === correctAnswer) {

            setTimeout(() => {
                setCountdown(false)
                setcount(prevCount => prevCount + 1);
                setCorrect(prevCorrect => prevCorrect + 1)
            }, 1000);
            setBtnDisabled(true);

        } else {

            toast.success(`Right Answer : ${rightanswer}`, {
                position: "top-right",
                autoClose: 2600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                setCountdown(false)
                setwrong(prevWrong => prevWrong + 1)
                setcount(prevCount => prevCount + 1);

            }, 3000);
            setBtnDisabled(true);


        }
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };


    return (
        <div>
            <ToastContainer />
            <main className="quiz-modal__body">
                {answers.length > 0 ? (
                    answers.map((answer, index) => (
                        <button disabled={btnDisabled}
                            key={index}
                            className={`quiz-modal__option ${selectedAnswer === answer ? (answer === correctAnswer ? 'correctAnswer' : 'incorrectAnswer') : ''}`}
                            onClick={() => rightanswers(answer)}
                        >
                            {answer}
                        </button>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </div>
    );
}
