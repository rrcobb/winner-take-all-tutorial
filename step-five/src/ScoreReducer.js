const INCREMENT_VALUE = 'IncrementValue';
export const incrementValue = player => {
  return { type: INCREMENT_VALUE, player };
};

export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      if (action.player === 'human') {
        return state + 1;
      }
      break;
    default:
      return state;
  }
  return state;
};

export const computerScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      if (action.player === 'computer') {
        return state + 1;
      }
      break;
    default:
      return state;
  }
  return state;
};
