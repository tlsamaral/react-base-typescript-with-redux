import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import RoutesApplication from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <RoutesApplication />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="Toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
