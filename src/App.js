import React from 'react';
import { SWRConfig } from 'swr';
import { Home } from './pages';

function App() {
  return (
    <SWRConfig
      value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}
    >
      <Home />
    </SWRConfig>
  );
}

export default App;
