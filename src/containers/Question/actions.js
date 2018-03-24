import { SUBMIT_ANSWER } from './constants';

export function submitAnswer(id, answer) {
  return {
    type: SUBMIT_ANSWER,
    answer,
    id
  };
}
