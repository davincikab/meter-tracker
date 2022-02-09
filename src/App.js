import { useEffect, useState } from 'react';
import './App.css';

import MapComponent from './components/Map';
import mapReq from './utils/getMapData';

function App() {
  const [meters, setMeters ] = useState([])

  useEffect(() => {
      async function fetchData() {
          let data = await mapReq.getMeters();
          setMeters(data)
      } 

      if(!meters[0]) {
        fetchData();
      }
      
  }, [meters]);

  console.log(meters);
  return (
    <div className="map-wrapper">
      { meters[0] && <MapComponent data={meters}/> }
    </div>
  );
}

export default App;
