import React, { useState } from "react";
import quizQuestions from "../data/personality-quiz.json"; // Import the quiz questions
import quizAnswersData from "../data/quiz-answers.json"; // Import the personality-to-cocktail mapping
import "../styles/Quiz.css"; // Import CSS for styling

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [selectedPersonalities, setSelectedPersonalities] = useState([]); // Track selected personalities
  const [result, setResult] = useState(null); // Store the final result

  const quizAnswers = quizAnswersData.find(
    (quiz) => quiz["quiz-name"] === "personality-quiz"
  ).answers;

  const handleAnswerClick = (personality) => {
    // Add the selected personality to the list
    setSelectedPersonalities([...selectedPersonalities, personality]);

    // Move to the next question or calculate the result
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Count the occurrences of each personality
    const personalityCounts = selectedPersonalities.reduce((counts, personality) => {
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
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedPersonalities([]);
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
                onClick={() => handleAnswerClick(answer.personality)}
              >
                {answer.answer}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Personality: {result.personality}</h2>
          <p>Your Cocktail Match: {result.cocktail}</p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;