var quizQuestions = [
    { Question: "What is Sailor moons real name?",
        A: "Ami",	
        B: "Usagi",	
        C: "Rei",
        D: "Luna",
        answer: "B",
    },

    { Question: "How many Sailor Guardians are there?",
        A: "3", 
        B: "5", 
        C: "9", 
        D: "10",
       answer: "D",
    },

    { Question: "Who is Sailor Moon in love with?",
        A: "Artemis",
        B: "Motoki", 
        C: "Tuxedo Mask", 
        D: "Nephrite",
        answer: "C",
    },

     { Question: "What is Usagi’s favorite dessert?",
        A: "Cakes/Sweets", 
        B: "Mochi", 
        C: "Pork Buns", 
        D: "Onigiri",
        answer: "A",
    },

    { Question: "Finish the sentence: 'Moon Prism Power _____________'.",
        A: "Make up",  
        B: "Check in", 
        C: "Engage", 
        D: "Its Mighty Morphin time",
    answer: "A",
    },

    { Question: "Who helped change Usagi into Sailor Moon?",
        A: "Artemis", 
        B: "Diana", 
        C: "Her Mother", 
        D: "Luna",
        answer: "D",
    },

    { Question: "How many Sailor Moon Series are there?",
        A: "3", 
        B: "5", 
        C: "4", 
        D: "6",
        answer: "B",
    },

    { Question: "What is Tuxedo Mask’s real name?",
        A: "Mamoru,",
        B: "Shingo", 
        C: "Motoki", 
        D: "Deimos",
        answer: "A",
    },

    { Question: "What is Sailor Mars’s real name?",
        A: "Ami",
        B: "Minako", 
        C: "Michiru", 
        D: "Rei",
        answer: "D",
    },

    { Question: "What is Sailor Mercury’s real name?",
        A: "Rei",
        B: "Ami", 
        C: "Makoto", 
        D: "Hotaru",
        answer: "B",
    },

    { Question: "What is Sailor Venus’s real name?",
        A: "Minako",
        B: "Rei",	
        C: "Diana",
        D: "Setsuna",
        answer: "A",
    },

    { Question: "What is Sailor Jupiter’s real name?",
        A: "Hotaru",
        B: "Chibiusa", 
        C: "Luna", 
        D: "Makoto",
        answer: "D",
    },

    { Question: "Who is Chibiusa?",
        A: "Rei’s sister",
        B: "Usagi’s Sister", 
        C: "Rei’s Daughter", 
        D: "Usagi’s Daughter",
        answer: "D",
    },

     { Question: "What is Usagis favorite activity",
        A: "Swimming",
        B: "Tennis", 
        C: "Boy Chasing", 
        D: "Dancing",
        answer: "C",
    },

    { Question: "Who created Sailor Moon?",
        A: "Miyuu Sawai",
        B: "Naok Takeuchi", 
        C: "Kae Araki", 
        D: "Kotono Mitsuishi",
        answer: "B",
    }

];

var quizPosition = 0;
var rightAnswers = 0;
var game;
var Question;
var userAnswer;
var optionsPossible;
var answerA;
var answerB;
var answerC;
var answerD;
var quizTimer = 120;
  
function get(x) {
    return document.getElementById(x);
  }
  get("input-initials").setAttribute("style", "display: none");
  get("save-results").setAttribute("style", "display: none");
  function start() {
    get("quiz-title").setAttribute("style", "display: none"); 
    get("start-button").setAttribute("style", "display: none"); 
    get("show-quiz").setAttribute("style", "display: block !important"); 
    setInterval(function () {
      if (quizTimer <= 0) {
        clearInterval(quizTimer);
        get("game-progress").innerHTML = "<h2>quiz score</h2>";
        game.innerHTML =
          Math.round((100 * rightAnswers) / quizQuestions.length) + "%";
        get("timer").setAttribute("style", "display: none"); 
        get("input-initials").setAttribute("style", "text-align: center");
        get("save-results").setAttribute("style", "text-align: center");
        return false;
      } else {
        get("timer").innerHTML = quizTimer;
      }
      quizTimer -= 1;
    }, 1000);
    renderQuestion();
  }
  
  function renderQuestion() {
    game = get("game");
    if (quizPosition >= quizQuestions.length) {
        game.innerHTML =
        Math.round((100 * rightAnswers) / quizQuestions.length) + "%";
      get("timer").setAttribute("style", "display: none");
      get("input-initials").setAttribute("style", "text-align: center");
      get("save-results").setAttribute("style", "text-align: center");
      quizTimer = 0;
      return false;
    }
    get ("game-progress").innerHTML =
      "Question " + (quizPosition + 1) + " of " + quizQuestions.length;
    Question = quizQuestions[quizPosition].Question;
    answerA = quizQuestions[quizPosition].A;
    answerB = quizQuestions[quizPosition].B;
    answerC = quizQuestions[quizPosition].C;
    answerD = quizQuestions[quizPosition].D;
    game.innerHTML = "<h3>" + Question + "</h3>";
    game.innerHTML +=
      "<label><input type='radio' name='optionsPossible' value='A'> " +
      answerA +
      "</label><br>";
      game.innerHTML +=
      "<label><input type='radio' name='optionsPossible' value='B'> " +
      answerB +
      "</label><br>";
      game.innerHTML +=
      "<label><input type='radio' name='optionsPossible' value='C'> " +
      answerC +
      "</label><br>";
      game.innerHTML +=
      "<label><input type='radio' name='optionsPossible' value='D'> " +
      answerD +
      "</label><br><br>";  
      game.innerHTML += "<button onclick='checkAnswer()'>submit answer</button>";
    get("timer").innerHTML = quizTimer;
   
  }

  function checkAnswer() {
    optionsPossible = document.getElementsByName("optionsPossible");
    for (var i = 0; i < optionsPossible.length; i++) {
      if (optionsPossible[i].checked) {
        userAnswer = optionsPossible[i].value;
      }
    }
    if (userAnswer == quizQuestions[quizPosition].answer) {
        rightAnswers++;
    } else {
      quizTimer -= 10;
    }
    quizPosition++;
    renderQuestion();
  }

  function saveResults() {
    userInitials = get("input-initials").value;  
    userScore = get("game").textContent;
    localStorage.setItem("user-initials", userInitials);
    localStorage.setItem("user-score", userScore);
    console.log(localStorage.getItem("user-initials"));
    console.log(localStorage.getItem("user-score"));
    
  }
  
  get("start-button").addEventListener("click", start);
  get("save-results").addEventListener("click", saveResults);