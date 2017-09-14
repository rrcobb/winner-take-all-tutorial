const DEAL_CARDS = 'DealCards';

const randomnumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

export const dealCards = dispatch => {
  const humanCard = randomnumber();
  const computerCard = randomnumber();
  dispatch({ type: DEAL_CARDS, data: { human: humanCard, computer: computerCard } });
  if (computerCard > humanCard) {
    dispatch({ type: 'IncrementValue', player: 'computer' });
  } else if (humanCard > computerCard) {
    dispatch({ type: 'IncrementValue', player: 'human' });
  }

  console.log(humanCard);
  console.log(computerCard);
};

export const cardReducer = (state = { human: null, computer: null }, action) => {
  switch (action.type) {
    case DEAL_CARDS:
      return action.data;
    default:
      return state;
  }
  return state;
};
