import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './store.js';

/*store.dispatch({ type: 'account/deposit', payload: 500 });
console.log(store.getState()); // current state of the store
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
