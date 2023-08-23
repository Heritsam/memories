import { type BankAction, BankActionType } from './bank-types';

const initialState = 0;

const reducer = (state: number = initialState, action: BankAction) => {
  switch (action.type) {
    case BankActionType.DEPOSIT:
      return state + action.payload;
    case BankActionType.WITHDRAW:
      return state - action.payload;
    case BankActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;