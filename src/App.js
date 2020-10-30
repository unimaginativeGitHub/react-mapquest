// import React, { useState } from 'react';
import './App.css';
import MapQuest from './MapQuest';
import MapFooter from './MapFooter';
// import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>MapQuest JS as a React Component</h1>
      </div>
      <MapQuest
        height={`${window.innerHeight * 0.89}px`}
        width={'100%'}
        center={[40.015831, -105.27927]}
        baseLayer={'light'}
        zoom={12}
        pitch={60}
        bearing={0}
        apiKey={'2NmKbEIILnTEItWHHYldG7iA0TLPkG6g'}
      />
      <MapFooter />
    </div>
  );
}

export default App;
