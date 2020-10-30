// import React, { useState } from 'react';
import { Button } from 'reactstrap';

const directionColator = () => {
  console.log('hello! You poked me!');
  console.log(window.L.mapquest.directionsLayer.startMarker);
};

function MapFooter() {
  //   const [directionsOn, toggleDirections] = useState(false);

  return (
    <div className="App-footer">
      <Button
        onClick={directionColator}
        color="primary">
        Generate Directions Profile
        </Button>
    </div>
  );
}

export default MapFooter;
