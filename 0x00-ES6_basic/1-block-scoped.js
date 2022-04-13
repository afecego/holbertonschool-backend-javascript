export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = false;
  task2 = true;
  return [task, task2];
}
