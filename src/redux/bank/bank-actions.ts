import { type Dispatch } from '@reduxjs/toolkit';

import { type BankAction, BankActionType } from './bank-types';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.BANKRUPT,
    });
  };
};