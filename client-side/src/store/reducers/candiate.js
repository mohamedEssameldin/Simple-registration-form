import * as actionTypes from "../actions/actionTypes";

const updateCandiate = (state, candiate) => {
  state.forEach((can) => {
    if (can.id === candiate.id) {
      can.fullName = candiate.fullName;
      can.age = candiate.age;
      can.address = candiate.address;
      can.email = candiate.email;
    }
  });
  return state;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_DATA:
      return [...state, ...action.data];
    case actionTypes.CREATE_CANDIATE:
      return [...state, action.candiate];
    case actionTypes.DELETE_CANDIATE:
      return state.filter((candiate) => candiate.id !== action.id);
    case actionTypes.EDIT_CANDIATE:
      return [...updateCandiate(state, action.candiate)];

    default:
      return state;
  }
};

export default reducer;
