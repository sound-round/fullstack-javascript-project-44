export const maxNumber = 20;
export const minNumber = 1;

export const getRandomIntFromInterval = (min, max) => { // min and max are included 
  return Math.floor(Math.random() * (max - min + 1) + min);
};