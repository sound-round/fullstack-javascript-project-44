#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomIntFromInterval, maxNumber, minNumber } from '../src/utils.js';
import runEngine from '../src/index.js';

const condition = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const maxSingIndex = 2;
const minSingIndex = 0;

const findCorrectAnswer = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    default:
      result = Number(num1) * Number(num2);
      break;
  }
  return String(result);
};

const playRound = () => {
  const number1 = getRandomIntFromInterval(minNumber, maxNumber);
  const number2 = getRandomIntFromInterval(minNumber, maxNumber);
  const operator = operators[getRandomIntFromInterval(minSingIndex, maxSingIndex)];
  console.log(`Question: ${number1} ${operator} ${number2}`);
  const userAnswer = readlineSync.question('Your answer?: ');
  const correctAnswer = findCorrectAnswer(number1, number2, operator);
  return { correctAnswer, userAnswer };
};

runEngine(playRound, condition);
