const INCREMENT_VALUE = 'IncrementValue';
export const incrementValue = { type: INCREMENT_VALUE };

export const cardReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return state + 1;
    default:
      return state;
  }
};
