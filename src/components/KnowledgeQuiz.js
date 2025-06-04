import React, { useState } from "react";
import knowledgeQuizQuestions from "../data/knowledge-quiz.json"; // Import knowledge quiz questions
import "../styles/Quiz.css"; // Import CSS for styling

const KnowledgeQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Track selected answers
  const [result, setResult] = useState(null); // Store the final result

  const handleAnswerClick = (answer) => {
    // Add the selected answer to the list
    setSelectedAnswers([...selectedAnswers, answer]);

    // Move to the next question or calculate the result
    if (currentQuestionIndex < knowledgeQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Calculate the score for the knowledge quiz
    const correctAnswers = knowledgeQuizQuestions.filter(
      (question, index) => question.answers.find((a) => a.correct)?.answer === selectedAnswers[index]
    );

    const score = correctAnswers.length;
    setResult({ score, total: knowledgeQuizQuestions.length });
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setResult(null);
  };

  return (
    <div className="quiz-container">
      {!result ? (
        <div className="question-container">
          <h2>{knowledgeQuizQuestions[currentQuestionIndex]["question-title"]}</h2>
          <div className="answers-container">
            {knowledgeQuizQuestions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerClick(answer.answer)}
              >
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Score: {result.score} / {result.total}</h2>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default KnowledgeQuiz;