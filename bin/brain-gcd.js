#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomIntFromInterval, maxNumber, minNumber } from '../src/utils.js';
import runEngine from '../src/index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  if (num2 === 0) return num1;
  return findGCD(num2, num1 % num2);
};

const playRound = () => {
  const number1 = getRandomIntFromInterval(minNumber, maxNumber);
  const number2 = getRandomIntFromInterval(minNumber, maxNumber);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer?: '));
  const correctAnswer = findGCD(number1, number2);
  return { correctAnswer, userAnswer };
};

runEngine(playRound, condition);
