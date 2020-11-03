import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home/Home';
import Info from './components/Info/Info';

function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
