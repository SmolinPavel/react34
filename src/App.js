import { Input } from '@material-ui/core';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import logo from './logo.svg';
import './App.css';

import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { withDate } from 'components/withDate';
import { Third } from 'components/Third';
import { FirstPage } from 'pages/FirstPage';
import { SecondPage } from 'pages/SecondPage';
import { store } from 'store';
import { Users } from 'components/Users';
import { NewUser } from 'components/NewUser';
import { Login } from 'components/Login';

const ButtonWithDate = withDate(Button);

const GOOGLE_CLIENT_ID =
  '245335753897-0uren379j1ri5j66dik7dan168hqdkc2.apps.googleusercontent.com';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const handleGoogleLogin = (data) => {
    console.log(data);
    setImageSrc(data.profileObj.imageUrl);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              onSuccess={handleGoogleLogin}
            />
          </div>
          {imageSrc && (
            <img crossOrigin="anonymous" src={imageSrc} alt="avatar" />
          )}
          <header className="App-header">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
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

            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/first" component={FirstPage} />
              <Route path="/second/:number" component={SecondPage} />
              <Route path="/third" component={Third} />
              <Route
                path="/users"
                component={() => (
                  <>
                    <Users />
                    <NewUser />
                  </>
                )}
              />
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
