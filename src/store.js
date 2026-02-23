import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };

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

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateName':
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

/*
store.dispatch({ type: 'account/deposit', payload: 500 });
console.log(store.getState()); // current state of the store

store.dispatch({ type: 'account/withdraw', payload: 200 });
console.log(store.getState()); // current state of the store

store.dispatch({
  type: 'account/requestLoan',
  payload: { amount: 1000, purpose: 'Buy a car' },
});
console.log(store.getState()); // current state of the store

store.dispatch({ type: 'account/payLoan' });
console.log(store.getState()); // current state of the store
*/

//! Create Action  Creator

//* Account Action Creator
function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
function requestLoan(loanAmount, loanPurpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount: loanAmount, purpose: loanPurpose },
  };
}
function payLoan() {
  return { type: 'account/payLoan' };
}

console.log(store.getState()); // current state of the store

store.dispatch(deposit(500));
console.log(store.getState()); // current state of the store

store.dispatch(withdraw(200));
console.log(store.getState()); // current state of the store

store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState()); // current state of the store

store.dispatch(payLoan());
console.log(store.getState()); // current state of the store

//* Customer Action Creator
function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullname) {
  return { type: 'customer/updateName', payload: fullname };
}

store.dispatch(createCustomer('Sagor Majomder', '452364'));
console.log(store.getState()); // current state of the store

store.dispatch(updateName('Sagor Mazumder'));
console.log(store.getState()); // current state of the store
