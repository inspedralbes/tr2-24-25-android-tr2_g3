const generateAdditionQuestions = () => {
    const questions = [];
  
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 50) + 1;
      const num2 = Math.floor(Math.random() * 50) + 1;
      const correctAnswer = num1 + num2;
      const questionText = `¿Cuánto es ${num1} + ${num2}?`;
  
      const correctOption = Math.floor(Math.random() * 4) + 1;
      const options = [];
  
      for (let j = 0; j < 4; j++) {
        if (j + 1 === correctOption) {
          options.push(correctAnswer);
        } else {
          let wrongAnswer;
          do {
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
          } while (wrongAnswer === correctAnswer || options.includes(wrongAnswer));
          options.push(wrongAnswer);
        }
      }
  
      questions.push({
        question: questionText,
        option1: options[0].toString(),
        option2: options[1].toString(),
        option3: options[2].toString(),
        option4: options[3].toString(),
        correct_answer: correctOption,
      });
    }
  
    return questions;
  };
  
  const generateSubtractionQuestions = () => {
    const questions = [];
  
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 50) + 1;
      const num2 = Math.floor(Math.random() * 50) + 1;
      const correctAnswer = num1 - num2;
      const questionText = `¿Cuánto es ${num1} - ${num2}?`;
  
      const correctOption = Math.floor(Math.random() * 4) + 1;
      const options = [];
  
      for (let j = 0; j < 4; j++) {
        if (j + 1 === correctOption) {
          options.push(correctAnswer);
        } else {
          let wrongAnswer;
          do {
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
          } while (wrongAnswer === correctAnswer || options.includes(wrongAnswer));
          options.push(wrongAnswer);
        }
      }
  
      questions.push({
        question: questionText,
        option1: options[0].toString(),
        option2: options[1].toString(),
        option3: options[2].toString(),
        option4: options[3].toString(),
        correct_answer: correctOption,
      });
    }
  
    return questions;
  };
  
  const generateMultiplicationQuestions = () => {
    const questions = [];
  
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 12) + 1;
      const num2 = Math.floor(Math.random() * 12) + 1;
      const correctAnswer = num1 * num2;
      const questionText = `¿Cuánto es ${num1} × ${num2}?`;
  
      const correctOption = Math.floor(Math.random() * 4) + 1;
      const options = [];
  
      for (let j = 0; j < 4; j++) {
        if (j + 1 === correctOption) {
          options.push(correctAnswer);
        } else {
          let wrongAnswer;
          do {
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
          } while (wrongAnswer === correctAnswer || options.includes(wrongAnswer));
          options.push(wrongAnswer);
        }
      }
  
      questions.push({
        question: questionText,
        option1: options[0].toString(),
        option2: options[1].toString(),
        option3: options[2].toString(),
        option4: options[3].toString(),
        correct_answer: correctOption,
      });
    }
  
    return questions;
  };
  
  const generateDivisionQuestions = () => {
    const questions = [];
  
    for (let i = 0; i < 10; i++) {
      let num1 = Math.floor(Math.random() * 12) + 1;
      let num2 = Math.floor(Math.random() * 12) + 1;
      num1 = num1 * num2; // Asegurar divisiones exactas
      const correctAnswer = num1 / num2;
      const questionText = `¿Cuánto es ${num1} ÷ ${num2}?`;
  
      const correctOption = Math.floor(Math.random() * 4) + 1;
      const options = [];
  
      for (let j = 0; j < 4; j++) {
        if (j + 1 === correctOption) {
          options.push(correctAnswer);
        } else {
          let wrongAnswer;
          do {
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
          } while (wrongAnswer === correctAnswer || options.includes(wrongAnswer));
          options.push(wrongAnswer);
        }
      }
  
      questions.push({
        question: questionText,
        option1: options[0].toString(),
        option2: options[1].toString(),
        option3: options[2].toString(),
        option4: options[3].toString(),
        correct_answer: correctOption,
      });
    }
  
    return questions;
  };
  
  // Ejemplo de uso
  console.log("Suma:", JSON.stringify(generateAdditionQuestions(), null, 2));
  console.log("Resta:", JSON.stringify(generateSubtractionQuestions(), null, 2));
  console.log("Multiplicación:", JSON.stringify(generateMultiplicationQuestions(), null, 2));
  console.log("División:", JSON.stringify(generateDivisionQuestions(), null, 2));
  