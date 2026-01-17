const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Questions database
const questions = [
    {
        id: 1,
        question: "What is the output of: typeof null?",
        choices: ["null", "object", "undefined"],
        correct: 1
    },
    {
        id: 2,
        question: "Which method adds elements to the end of an array?",
        choices: ["shift()", "push()", "unshift()"],
        correct: 1
    },
    {
        id: 3,
        question: "What does '===' check in JavaScript?",
        choices: ["Value only", "Type only", "Value and type"],
        correct: 2
    },
    {
        id: 4,
        question: "What is the result of: 2 + '2'?",
        choices: ["4", "22", "NaN"],
        correct: 1
    },
    {
        id: 5,
        question: "Which keyword declares a block-scoped variable?",
        choices: ["var", "let", "function"],
        correct: 1
    },
    {
        id: 6,
        question: "What does the 'this' keyword refer to in a regular function?",
        choices: ["The function itself", "The global object", "The parent object"],
        correct: 1
    },
    {
        id: 7,
        question: "Which method removes the last element from an array?",
        choices: ["pop()", "shift()", "splice()"],
        correct: 0
    },
    {
        id: 8,
        question: "What is a closure in JavaScript?",
        choices: ["A loop structure", "A function with access to outer scope", "A type of object"],
        correct: 1
    },
    {
        id: 9,
        question: "What does NaN stand for?",
        choices: ["Null and Null", "Not a Number", "New Array Node"],
        correct: 1
    },
    {
        id: 10,
        question: "Which operator is used for strict inequality?",
        choices: ["!=", "!==", "<>"],
        correct: 1
    },
    {
        id: 11,
        question: "What is the output of: Boolean('')?",
        choices: ["true", "false", "undefined"],
        correct: 1
    },
    {
        id: 12,
        question: "Which method converts JSON string to JavaScript object?",
        choices: ["JSON.stringify()", "JSON.parse()", "JSON.object()"],
        correct: 1
    },
    {
        id: 13,
        question: "What is the default return value of a function?",
        choices: ["null", "0", "undefined"],
        correct: 2
    },
    {
        id: 14,
        question: "Which loop is guaranteed to execute at least once?",
        choices: ["for loop", "while loop", "do...while loop"],
        correct: 2
    },
    {
        id: 15,
        question: "What does the 'async' keyword do?",
        choices: ["Makes function faster", "Returns a Promise", "Creates a new thread"],
        correct: 1
    },
    {
        id: 16,
        question: "Which method finds an element in an array?",
        choices: ["search()", "find()", "locate()"],
        correct: 1
    },
    {
        id: 17,
        question: "What is the output of: 0 == false?",
        choices: ["true", "false", "undefined"],
        correct: 0
    },
    {
        id: 18,
        question: "Which keyword is used to handle errors?",
        choices: ["error", "catch", "handle"],
        correct: 1
    },
    {
        id: 19,
        question: "What does the spread operator (...) do?",
        choices: ["Deletes elements", "Expands iterables", "Creates loops"],
        correct: 1
    },
    {
        id: 20,
        question: "Which method creates a new array with filtered elements?",
        choices: ["map()", "filter()", "reduce()"],
        correct: 1
    },

    // Original 20 questions
   
    {
        id: 21,
        question: "What is the difference between function declaration and function expression?",
        choices: ["No difference", "Function declarations are hoisted", "Function expressions are faster", "Function declarations can't have parameters"],
        correct: 1
    },
    {
        id: 22,
        question: "What does an arrow function NOT have?",
        choices: ["Parameters", "Return value", "Its own 'this' binding", "Function body"],
        correct: 2
    },
    {
        id: 23,
        question: "What is a higher-order function?",
        choices: ["A function with more parameters", "A function that takes or returns a function", "A function with a long name", "A function inside a class"],
        correct: 1
    },
    {
        id: 24,
        question: "What does the 'bind()' method do?",
        choices: ["Calls a function immediately", "Creates a new function with a bound 'this'", "Binds two functions together", "Prevents function execution"],
        correct: 1
    },
    {
        id: 25,
        question: "What is a callback function?",
        choices: ["A function that calls back to the server", "A function passed as an argument to another function", "A function that returns a promise", "A recursive function"],
        correct: 1
    },
    {
        id: 26,
        question: "What is the purpose of the 'call()' method?",
        choices: ["To call a function with a given 'this' value", "To call multiple functions", "To schedule a function call", "To prevent function execution"],
        correct: 0
    },
    {
        id: 27,
        question: "What is an IIFE (Immediately Invoked Function Expression)?",
        choices: ["A function that never executes", "A function that executes right after definition", "A function inside a loop", "A function with no parameters"],
        correct: 1
    },
    {
        id: 28,
        question: "What does the 'apply()' method do?",
        choices: ["Applies CSS to elements", "Calls a function with an array of arguments", "Applies a function to all array elements", "Creates a copy of a function"],
        correct: 1
    },
    {
        id: 29,
        question: "What is function currying?",
        choices: ["Calling multiple functions", "Transforming a function with multiple arguments into a sequence of functions", "Making functions faster", "Decorating functions"],
        correct: 1
    },
    {
        id: 30,
        question: "What are default parameters in functions?",
        choices: ["Parameters that are always required", "Parameters with predefined values if not provided", "The first parameter", "Parameters that can't be changed"],
        correct: 1
    },
    
    // Arrays (10 questions)
    {
        id: 31,
        question: "Which method creates a new array with all elements that pass a test?",
        choices: ["map()", "filter()", "find()", "reduce()"],
        correct: 1
    },
    {
        id: 32,
        question: "What does the 'map()' method return?",
        choices: ["The original array", "A new array with transformed elements", "A single value", "A boolean"],
        correct: 1
    },
    {
        id: 33,
        question: "Which method removes the first element from an array?",
        choices: ["shift()", "unshift()", "pop()", "splice()"],
        correct: 0
    },
    {
        id: 34,
        question: "What does 'Array.isArray()' do?",
        choices: ["Creates an array", "Checks if a value is an array", "Converts to array", "Sorts an array"],
        correct: 1
    },
    {
        id: 35,
        question: "Which method adds elements to the beginning of an array?",
        choices: ["push()", "unshift()", "concat()", "splice()"],
        correct: 1
    },
    {
        id: 36,
        question: "What does the 'reduce()' method do?",
        choices: ["Reduces array size", "Executes a reducer function on each element to produce a single value", "Removes duplicates", "Sorts the array"],
        correct: 1
    },
    {
        id: 37,
        question: "Which method finds the first element that satisfies a condition?",
        choices: ["filter()", "find()", "search()", "locate()"],
        correct: 1
    },
    {
        id: 38,
        question: "What does the 'slice()' method do?",
        choices: ["Removes elements", "Returns a shallow copy of a portion of an array", "Sorts the array", "Reverses the array"],
        correct: 1
    },
    {
        id: 39,
        question: "Which method changes the contents of an array by removing or replacing elements?",
        choices: ["slice()", "splice()", "split()", "slide()"],
        correct: 1
    },
    {
        id: 40,
        question: "What does 'array.includes()' return?",
        choices: ["The index of the element", "A boolean indicating if element exists", "The element itself", "A new array"],
        correct: 1
    },
    
    // OOP (10 questions)
    {
        id: 41,
        question: "What keyword is used to create a class in JavaScript?",
        choices: ["function", "class", "object", "prototype"],
        correct: 1
    },
    {
        id: 42,
        question: "What is a constructor in a class?",
        choices: ["A method that destroys objects", "A special method for creating and initializing objects", "A method that returns values", "A static method"],
        correct: 1
    },
    {
        id: 43,
        question: "What does the 'extends' keyword do?",
        choices: ["Extends a string", "Creates class inheritance", "Adds methods to a class", "Extends an array"],
        correct: 1
    },
    {
        id: 44,
        question: "What is the 'super' keyword used for?",
        choices: ["To create super variables", "To call parent class constructor or methods", "To make methods faster", "To define static methods"],
        correct: 1
    },
    {
        id: 45,
        question: "What is encapsulation in OOP?",
        choices: ["Bundling data and methods that work on that data", "Creating multiple classes", "Inheriting from parent class", "Overriding methods"],
        correct: 0
    },
    {
        id: 46,
        question: "What are static methods in a class?",
        choices: ["Methods that never change", "Methods called on the class itself, not instances", "Methods without parameters", "Private methods"],
        correct: 1
    },
    {
        id: 47,
        question: "What is polymorphism in JavaScript?",
        choices: ["Having multiple classes", "The ability of objects to take many forms", "Creating arrays of objects", "Using multiple inheritance"],
        correct: 1
    },
    {
        id: 48,
        question: "How do you create a private field in a JavaScript class?",
        choices: ["Using 'private' keyword", "Using '#' prefix", "Using '_' prefix", "Using 'var' keyword"],
        correct: 1
    },
    {
        id: 49,
        question: "What is method overriding?",
        choices: ["Having multiple methods with same name", "Redefining a parent class method in child class", "Calling a method multiple times", "Deleting a method"],
        correct: 1
    },
    {
        id: 50,
        question: "What is the difference between a class and an object?",
        choices: ["No difference", "Class is a blueprint, object is an instance", "Class is smaller than object", "Object can't have methods"],
        correct: 1
    }
];

// Store quiz results
let quizResults = [];

// API Routes

// Get all questions (without correct answers)
app.get('/api/questions', (req, res) => {
    const questionsWithoutAnswers = questions.map(q => ({
        id: q.id,
        question: q.question,
        choices: q.choices
    }));
    res.json(questionsWithoutAnswers);
});

// Submit quiz and get results
app.post('/api/submit', (req, res) => {
    const { answers } = req.body;
    
    let score = 0;
    const results = [];
    
    answers.forEach((answer, index) => {
        const question = questions[index];
        const isCorrect = answer === question.correct;
        
        if (isCorrect) score++;
        
        results.push({
            questionId: question.id,
            userAnswer: answer,
            correctAnswer: question.correct,
            isCorrect: isCorrect
        });
    });
    
    const percentage = Math.round((score / questions.length) * 100);
    
    const result = {
        score: score,
        total: questions.length,
        percentage: percentage,
        results: results,
        timestamp: new Date()
    };
    
    quizResults.push(result);
    
    res.json(result);
});

// Get quiz history
app.get('/api/history', (req, res) => {
    res.json(quizResults);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Quiz server running on http://localhost:${PORT}`);
    console.log(`📝 Total questions: ${questions.length}`);
});