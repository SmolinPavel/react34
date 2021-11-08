import { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

// import { products } from 'api/products.json';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { withDate } from 'components/withDate';
import { asyncComponent } from 'asyncComponentHOC';
import { Third } from 'components/Third';
import { FirstPage } from 'pages/FirstPage';
import { SecondPage } from 'pages/SecondPage';
import { store } from 'store';
import { Users } from 'components/Users';

const AsyncExample = asyncComponent({
  loader: () => import('./components/Example'),
  loading: () => <h3>Loading...</h3>,
});

const ButtonWithDate = withDate(Button);

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCards([
        {
          id: 1,
          label: 'Card 1',
        },
        {
          id: 2,
          label: 'Card 2',
        },
      ]);
    }, 2000);
  }, []);

  const handleAdd = () => {
    setCards((prevCards) => [...prevCards, { id: 3, label: 'Card 3' }]);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <AsyncExample />
            <ul>
              <li>
                <Link to="/first">First</Link>
              </li>
              <li>
                <Link to="/second">Second</Link>
              </li>
              <li>
                <Link to="/third">Third</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>

            <ul>
              {cards.map((card) => (
                <li key={card.id}>{card.label}</li>
              ))}
            </ul>
            <div>
              <button onClick={handleAdd}>Add card</button>
            </div>

            <Switch>
              <Route path="/first" component={FirstPage} />
              <Route path="/second" component={SecondPage} />
              <Route path="/third" component={Third} />
              <Route path="/users" component={Users} />
              <Route path="/">
                <main>
                  <img src={logo} className="App-logo" alt="logo" />
                  <Title color="blue" bordered>
                    34
                  </Title>

                  <div>
                    <ButtonWithDate
                      onClick={() => console.log('click')}
                      color="blue"
                      primary
                    >
                      Primary
                    </ButtonWithDate>
                  </div>
                  <div>
                    <Input onChange={(e) => console.log(e.target.value)} />
                  </div>
                </main>
              </Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
