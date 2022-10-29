#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomIntFromInterval, maxNumber, minNumber } from '../src/utils.js';
import runEngine from '../src/index.js';

const condition = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 4;
const replacer = '..';

const generateProgression = () => {
  const progressionLength = getRandomIntFromInterval(minLength, maxLength);
  const step = getRandomIntFromInterval(minStep, maxStep);
  const firstItem = getRandomIntFromInterval(minNumber, maxNumber);
  const progression = [firstItem];
  let currentItem = firstItem;
  for (let i = 0; i < progressionLength; i += 1) {
    currentItem += step;
    progression.push(currentItem);
  }
  return progression;
};

const hideNumber = (init) => {
  const progression = init;
  const index = getRandomIntFromInterval(0, progression.length);
  const hiddenNumber = progression[index];
  progression[index] = replacer;
  return { progression, hiddenNumber };
};

const playRound = () => {
  const initProgression = generateProgression();
  const { progression, hiddenNumber } = hideNumber(initProgression);
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer?: '));
  return { correctAnswer: hiddenNumber, userAnswer };
};

runEngine(playRound, condition);
