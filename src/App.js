import { Input } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

import { products } from 'api/products.json';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title color="blue" bordered>
          34
        </Title>
        {/* <ul>
          {products.map((product) => (
            <li key={product.id} style={{ color: 'black' }}>
              {product.name}{' '}
              <img
                width="200"
                style={{ borderRadius: '50%' }}
                src={product.image}
                alt={product.name}
              />
            </li>
          ))}
        </ul> */}

        <div>
          <Button onClick={() => console.log('click')} color="blue" primary>
            Primary
          </Button>
        </div>
        <div>
          <Input onChange={(e) => console.log(e.target.value)} />
        </div>
      </header>
    </div>
  );
}

export default App;
