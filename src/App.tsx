import React, {ReactElement} from 'react';
import './styles/App.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import RemoteHeader from 'ci_modular_header/Header';
import KittenList from './KittenList';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <RemoteHeader />
      <div className="content">
        <h1>KittenList App</h1>
        <KittenList />
      </div>
    </div>
  );
};

export default App;
