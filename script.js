/**
 * All quiz questions categorized by topics.
 * @type {Object}
 */
const allQuestions = {
  geography: [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Rome", "Berlin"],
      correct: "Paris",
      hint: "The city is known for its fashion and the Eiffel Tower.",
    },
    {
      question: "Which continent is Australia located on?",
      answers: ["Asia", "Europe", "Australia", "Africa"],
      correct: "Australia",
      hint: "It is both a country and a continent.",
    },
    {
      question: "What is the longest river in the world?",
      answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correct: "Amazon",
      hint: "It flows through Brazil.",
    },
    {
      question: "Which country has the largest population?",
      answers: ["China", "India", "USA", "Indonesia"],
      correct: "China",
      hint: "It is the country with the Great Wall.",
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Malta", "San Marino", "Vatican City"],
      correct: "Vatican City",
      hint: "It is the headquarters of the Roman Catholic Church.",
    },
  ],
  literature: [
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correct: "Harper Lee",
      hint: "The author's first name is Harper.",
    },
    {
      question: "Who wrote '1984'?",
      answers: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "J.D. Salinger",
      ],
      correct: "George Orwell",
      hint: "The author's real name was Eric Blair.",
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      answers: [
        "Jane Austen",
        "Emily Brontë",
        "Charlotte Brontë",
        "Louisa May Alcott",
      ],
      correct: "Jane Austen",
      hint: "The author is famous for her novels about English society.",
    },
    {
      question: "Who wrote 'Moby Dick'?",
      answers: [
        "Herman Melville",
        "Jules Verne",
        "Mark Twain",
        "Nathaniel Hawthorne",
      ],
      correct: "Herman Melville",
      hint: "The story is about a whale and its pursuit.",
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      answers: [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "John Steinbeck",
        "William Faulkner",
      ],
      correct: "F. Scott Fitzgerald",
      hint: "The book is set in the Jazz Age.",
    },
  ],
  science: [
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "O2", "CO2", "HO"],
      correct: "H2O",
      hint: "It consists of two hydrogen atoms and one oxygen atom.",
    },
    {
      question: "What planet is known as the Red Planet?",
      answers: ["Mars", "Venus", "Jupiter", "Saturn"],
      correct: "Mars",
      hint: "It is the fourth planet from the Sun.",
    },
    {
      question: "What is the speed of light?",
      answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
      correct: "300,000 km/s",
      hint: "It is approximately 299,792 kilometers per second.",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
      correct: "Carbon Dioxide",
      hint: "It is essential for photosynthesis.",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correct: "Mitochondria",
      hint: "It generates most of the cell's supply of ATP.",
    },
  ],
  history: [
    {
      question: "Who was the first president of the United States?",
      answers: [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
        "John Adams",
      ],
      correct: "George Washington",
      hint: "He is known as the 'Father of His Country'.",
    },
    {
      question: "In what year did World War II end?",
      answers: ["1945", "1918", "1939", "1963"],
      correct: "1945",
      hint: "The war ended in the mid-1940s.",
    },
    {
      question: "Who discovered America?",
      answers: [
        "Christopher Columbus",
        "Leif Erikson",
        "Ferdinand Magellan",
        "James Cook",
      ],
      correct: "Christopher Columbus",
      hint: "He made his voyage in 1492.",
    },
    {
      question:
        "What was the name of the ship that brought the Pilgrims to America?",
      answers: ["Mayflower", "Santa Maria", "Endeavour", "Discovery"],
      correct: "Mayflower",
      hint: "It set sail from Plymouth, England.",
    },
    {
      question:
        "Who was the main architect of the Reign of Terror during the French Revolution?",
      answers: [
        "Maximilien Robespierre",
        "Napoleon Bonaparte",
        "Louis XVI",
        "Jean-Paul Marat",
      ],
      correct: "Maximilien Robespierre",
      hint: "He was a leading member of the Committee of Public Safety.",
    },
  ],
  movies: [
    {
      question: "Who directed 'Inception'?",
      answers: [
        "Christopher Nolan",
        "Steven Spielberg",
        "James Cameron",
        "Ridley Scott",
      ],
      correct: "Christopher Nolan",
      hint: "He also directed 'The Dark Knight' trilogy.",
    },
    {
      question: "Who played Jack in 'Titanic'?",
      answers: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Cruise"],
      correct: "Leonardo DiCaprio",
      hint: "He is also known for his role in 'Inception'.",
    },
    {
      question: "What year was 'The Godfather' released?",
      answers: ["1972", "1980", "1969", "1975"],
      correct: "1972",
      hint: "It is widely regarded as one of the greatest films of all time.",
    },
    {
      question: "Who played the Joker in 'The Dark Knight'?",
      answers: [
        "Heath Ledger",
        "Joaquin Phoenix",
        "Jack Nicholson",
        "Jared Leto",
      ],
      correct: "Heath Ledger",
      hint: "He posthumously won an Academy Award for this role.",
    },
    {
      question: "Which movie features the quote 'Here's looking at you, kid'?",
      answers: [
        "Casablanca",
        "Gone with the Wind",
        "The Maltese Falcon",
        "Citizen Kane",
      ],
      correct: "Casablanca",
      hint: "It stars Humphrey Bogart and Ingrid Bergman.",
    },
  ],
};

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let totalCorrect = 0;
let totalAttempted = 0;

const usedCategories = new Set();
const categorySelectionElement = document.getElementById("category-selection");
const quizContentElement = document.getElementById("quiz-content");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const hintButton = document.getElementById("hint-button");
const hintContainer = document.getElementById("hint-container");
const scoreTrackerElement = document.getElementById("score-tracker");
const resetButton = document.getElementById("reset-button");
const ratingLabel = document.getElementById("rating-label");

/**
 * Select a category and start the quiz.
 * @param {string} category - The category chosen by the user.
 */
function selectCategory(category) {
  if (usedCategories.has(category) && score > 0) {
    alert(
      "You've already completed this category. Please reset your score to try again."
    );
    return;
  }
  questions = allQuestions[category];
  usedCategories.add(category);
  totalQuestions = questions.length;
  categorySelectionElement.classList.add("hidden");
  quizContentElement.classList.remove("hidden");
  showQuestion();
}

/**
 * Display the current question and answer choices.
 */
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answersElement.innerHTML = "";
  hintContainer.classList.add("hidden");
  hintContainer.textContent = "";
  hintButton.disabled = false; // Enable hint button for the current question

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("answer");
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(button, answer));
    answersElement.appendChild(button);
  });

  // Update score and rating
  updateScoreAndRating();
}

/**
 * Handle answer selection and update the UI.
 * @param {HTMLElement} button - The button element clicked by the user.
 * @param {string} answer - The answer chosen by the user.
 */
function selectAnswer(button, answer) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = answer === currentQuestion.correct;
  totalAttempted++; // Increment total attempted questions

  if (isCorrect) {
    button.classList.add("correct");
    score++;
    totalCorrect++; // Increment total correct answers
  } else {
    button.classList.add("wrong");
  }

  // Disable all buttons
  Array.from(answersElement.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.correct) {
      btn.classList.add("correct");
    }
  });

  nextButton.disabled = false;
  hintButton.disabled = true; // Disable hint button after an answer is selected

  // Update rating
  updateScoreAndRating();
}

/**
 * Move to the next question or finish the quiz.
 */
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.disabled = true;
    hintContainer.classList.add("hidden"); // Hide the hint container when switching questions
  } else {
    questionElement.textContent = `Quiz finished! Your score is ${score}.`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
    backButton.classList.remove("hidden");
    hintButton.classList.add("hidden");

    // Update score and rating at the end of the category
    updateScoreAndRating(true);
  }
});

/**
 * Go back to category selection.
 */
backButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  categorySelectionElement.classList.remove("hidden");
  quizContentElement.classList.add("hidden");
  backButton.classList.add("hidden");
  nextButton.style.display = "inline-block";
  nextButton.disabled = true;
  hintButton.classList.remove("hidden");
  hintContainer.classList.add("hidden");
  hintContainer.textContent = "";
});

/**
 * Show or hide the hint.
 */
hintButton.addEventListener("click", () => {
  if (hintContainer.classList.contains("hidden")) {
    const currentQuestion = questions[currentQuestionIndex];
    hintContainer.textContent = currentQuestion.hint || "No hint available.";
    hintContainer.classList.remove("hidden");

    // Position the tooltip
    const hintButtonRect = hintButton.getBoundingClientRect();
    hintContainer.style.left = `${hintButtonRect.left}px`;
    hintContainer.style.top = `${hintButtonRect.bottom + window.scrollY}px`;
    hintContainer.style.display = "block";
  } else {
    hintContainer.classList.add("hidden"); // Hide the hint if button is pressed again
  }
});

/**
 * Toggle between light and dark themes.
 */
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

/**
 * Update the score and rating.
 * @param {boolean} final - Indicates if it's the final update after finishing a category.
 */
function updateScoreAndRating(final = false) {
  if (final) {
    scoreTrackerElement.textContent = `Final Score: ${score}/${totalQuestions}`;
  } else {
    scoreTrackerElement.textContent = `Score: ${score}`;
  }
  const overallRating = (totalCorrect / totalAttempted) * 100;
  ratingLabel.textContent = `Rating: ${Math.max(
    0,
    Math.min(100, Math.round(overallRating))
  )}%`; // Ensure rating is between 0 and 100
}

/**
 * Reset the score and allow retaking of categories.
 */
resetButton.addEventListener("click", () => {
  score = 0;
  updateScoreAndRating();
  alert("Score has been reset. You can now retake any category.");
});

// Initially, disable the next button and hide the hint tooltip
nextButton.disabled = true;
hintContainer.style.display = "none";
