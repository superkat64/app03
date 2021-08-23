import React, {ReactElement} from 'react';
import {Logo, Button} from '@customink/pigment-react';
import './styles/App.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import RemoteHeader from 'ci_modular_header/Header';
import testingLogo from './octopus.png';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <RemoteHeader />
      <header className="App-header">
        <Logo
          variant="inky"
          height="100px"
          onClick={() => undefined}
          className="App-logo"
        />
      </header>
      <div>
        <Button
          onClick={() => {
            window.location.href = 'https://reactjs.org';
          }}
          variant="primary">
          Learn React
        </Button>
        <div>
          <img src={testingLogo} alt="React Testing Library" />
        </div>
        <Button
          onClick={() => {
            window.location.href =
              'https://testing-library.com/docs/react-testing-library/intro/';
          }}
          variant="primary">
          React Testing Library
        </Button>
      </div>
    </div>
  );
};

export default App;
