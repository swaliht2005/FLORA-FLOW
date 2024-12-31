import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CommonRaouts from './Routes/CommonRaouts';


function App() {
  return (
    <BrowserRouter>
      <CommonRaouts />
    </BrowserRouter>
  );
}

export default App;
