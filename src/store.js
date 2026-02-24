import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

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

/*
console.log(store.getState()); // current state of the store

store.dispatch(deposit(500));
console.log(store.getState()); // current state of the store

store.dispatch(withdraw(200));
console.log(store.getState()); // current state of the store

store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState()); // current state of the store

store.dispatch(payLoan());
console.log(store.getState()); // current state of the store

store.dispatch(createCustomer('Sagor Majomder', '452364'));
console.log(store.getState()); // current state of the store

store.dispatch(updateName('Sagor Mazumder'));
console.log(store.getState()); // current state of the store
*/
