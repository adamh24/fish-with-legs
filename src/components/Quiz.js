import React, { useState } from "react";
import personalityQuizQuestions from "../data/personality-quiz.json"; // Import personality quiz questions
import knowledgeQuizQuestions from "../data/knowledge-quiz.json"; // Import knowledge quiz questions
import quizAnswersData from "../data/quiz-answers.json"; // Import the personality-to-cocktail mapping
import "../styles/Quiz.css"; // Import CSS for styling
import { useParams } from "react-router-dom"; // Import useParams to get the quiz title from the URL
const Quiz = () => {
  const { quizTitle } = useParams(); // Get the title from the URL
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Track selected answers
  const [result, setResult] = useState(null); // Store the final result

  // Dynamically load the quiz questions based on the quiz title
  const quizQuestions =
    quizTitle === "personality-quiz"
      ? personalityQuizQuestions
      : knowledgeQuizQuestions;

  // Dynamically load the answers mapping for personality quizzes
  const quizAnswers =
    quizTitle === "personality-quiz"
      ? quizAnswersData.find((quiz) => quiz["quiz-name"] === "personality-quiz")
          .answers
      : null;

  const handleAnswerClick = (answer) => {
    // Add the selected answer to the list
    setSelectedAnswers([...selectedAnswers, answer]);

    // Move to the next question or calculate the result
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    if (quizTitle === "personality-quiz") {
      // Count the occurrences of each personality
      const personalityCounts = selectedAnswers.reduce((counts, personality) => {
        counts[personality] = (counts[personality] || 0) + 1;
        return counts;
      }, {});

      // Find the most common personality
      const mostCommonPersonality = Object.keys(personalityCounts).reduce((a, b) =>
        personalityCounts[a] > personalityCounts[b] ? a : b
      );

      // Get the corresponding cocktail from quiz-answers.json
      const cocktail = quizAnswers[mostCommonPersonality];

      // Set the result
      setResult({ personality: mostCommonPersonality, cocktail });
    } else if (quizTitle === "knowledge-quiz") {
      // Calculate the score for the knowledge quiz
      const correctAnswers = quizQuestions.filter(
        (question, index) => question.answers.find((a) => a.correct)?.answer === selectedAnswers[index]
      );

      const score = correctAnswers.length;
      setResult({ score, total: quizQuestions.length });
    }
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
          <h2>{quizQuestions[currentQuestionIndex]["question-title"]}</h2>
          <div className="answers-container">
            {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() =>
                  handleAnswerClick(
                    quizTitle === "personality-quiz"
                      ? answer.personality
                      : answer.answer
                  )
                }
              >
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      ) : quizTitle === "personality-quiz" ? (
        <div className="result-container">
          <h2>Your Personality: {result.personality}</h2>
          <p>Your Cocktail Match: {result.cocktail}</p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
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

export default Quiz;