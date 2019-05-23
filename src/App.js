import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import Navbar from './components/commonComponents/Navbar';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {Routes}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
