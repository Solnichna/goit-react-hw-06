import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistStore } from './redux/store'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
