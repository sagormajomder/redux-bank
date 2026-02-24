const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        isLoading: false,
        balance: state.balance + action.payload,
      };

    case 'account/convertingCurrency':
      return { ...state, isLoading: true };

    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };

    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

//* Account Action Creator
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  // Middleware
  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurrency' });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );

    const data = await res.json();
    // console.log(data);
    const converted = data.rates.USD;

    dispatch({ type: 'account/deposit', payload: converted });
  };
}
export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
export function requestLoan(loanAmount, loanPurpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount: loanAmount, purpose: loanPurpose },
  };
}
export function payLoan() {
  return { type: 'account/payLoan' };
}
