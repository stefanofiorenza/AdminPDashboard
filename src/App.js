import React from 'react';
import './App.css';

import { BrowserRouter , HashRouter} from 'react-router-dom';
import MasterLayout from './components/layout/MasterLayout.jsx';
import CenteredLayout from './components/layout/CenteredLayout.jsx';

function App() {
  return (
    <BrowserRouter>
      <MasterLayout />
    </BrowserRouter>
  );
}

export default App;
