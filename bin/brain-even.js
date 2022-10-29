#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomIntFromInterval, maxNumber, minNumber } from '../src/utils.js';
import runEngine from '../src/index.js';

const isEven = (number) => {
  return number % 2 === 0;
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".'

const playRound = () => {
  const number = getRandomIntFromInterval(minNumber, maxNumber);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer?: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { correctAnswer, userAnswer }
}

runEngine(playRound, condition)