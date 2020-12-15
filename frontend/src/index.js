import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/configureStore';
import App from './components/App/App';
import {EngOrderProvider} from './context/EngOrderContext';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <EngOrderProvider>
        <App />
      </EngOrderProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
