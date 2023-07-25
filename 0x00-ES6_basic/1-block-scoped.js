export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
  /* eslint-disable no-unused-varariables */
    const task = true;
    const task2 = false;
  }
  /* eslint-disable no-unused-varariables */

  return [task, task2];
}
