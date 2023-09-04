import { useDispatch, useSelector } from 'react-redux';

import * as actions from '@/stores/bank/bank-actions';
import { RootState } from '@/stores/store';
import { bindActionCreators } from '@reduxjs/toolkit';

const BankPage = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: RootState) => state.bank);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
};

export default BankPage;