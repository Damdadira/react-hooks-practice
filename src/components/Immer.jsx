import produce from 'immer';

const state = {
  number: 1,
  dontChaangeMe: 2,
};

const nextState = produce(state, (draft) => {
  draft.number += 1;
});

console.log(nextState);
