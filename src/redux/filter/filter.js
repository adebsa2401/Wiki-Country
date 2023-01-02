const FILTER = 'wiki-country/filter/FILTER';

export const filterItems = (limit, ge) => ({
  type: FILTER,
  payload: {
    limit,
    ge,
  },
});

const initialState = {
  limit: 0,
  ge: true,
};

export default (state = initialState, action) => {
  let nextState = { ...state };

  switch (action.type) {
    case FILTER:
      nextState = {
        limit: action.payload.limit,
        ge: action.payload.ge,
      };
      return nextState;
    default:
      return nextState;
  }
};
