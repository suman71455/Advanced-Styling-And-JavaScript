// Quiz Logic
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size"],
    correct: 2
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["js", "javascript", "script"],
    correct: 2
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((q, index) => {
    const qBox = document.createElement("div");
    qBox.innerHTML = `<p><strong>Q${index + 1}:</strong> ${q.question}</p>`;
    
    q.options.forEach((opt, i) => {
      qBox.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${opt}
        </label><br/>
      `;
    });

    container.appendChild(qBox);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && parseInt(answer.value) === q.correct) {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${quizData.length}`;
}

window.onload = loadQuiz;

// Joke API
function fetchJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      jokeElement.textContent = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch(() => {
      jokeElement.textContent = "Oops! Couldn't fetch a joke.";
    });
}
