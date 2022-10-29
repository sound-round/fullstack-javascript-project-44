#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const maxRound = 3;
const maxNumber = 20;
const minNumber = 1;

const randomIntFromInterval = (min, max) => { // min and max are included 
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = (number) => {
  return number % 2 === 0;
};

const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let currentRound = 1;

while (currentRound <= maxRound) {
  const number = randomIntFromInterval(minNumber, maxNumber);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer?: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (correctAnswer === userAnswer) {
    console.log("Correct!");
    currentRound += 1;
  } else {
    currentRound = 1;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  };
};

console.log(`Congratulations, ${name}!`)
