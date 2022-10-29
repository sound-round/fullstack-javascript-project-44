#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomIntFromInterval, maxNumber, minNumber } from '../src/utils.js';
import runEngine from '../src/index.js';

const isPrime = (number) => {
  if (number === 1) return true;
  let divisor = 2;
  while (number % divisor !== 0) {
    divisor += 1;
  }
  return divisor === number;
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playRound = () => {
  const number = getRandomIntFromInterval(minNumber, maxNumber);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer?: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { correctAnswer, userAnswer };
};

runEngine(playRound, condition);
