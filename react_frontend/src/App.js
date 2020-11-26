import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/main.component';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vis/dist/style.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
