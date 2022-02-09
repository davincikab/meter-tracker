import { useEffect, useState } from 'react';
import './App.css';

import MapComponent from './components/Map';
import mapReq from './utils/getMapData';

function App() {
  const [state, setState ] = useState({ meters:[] })

  useEffect(() => {
      async function fetchData() {
          let data = await mapReq.getMeters();
          setState({...state, meters:data })
      } 

      fetchData();
  });

  console.log(state);
  const { meters } = state;
  return (
    <div className="map-wrapper">
      { meters[0] && <MapComponent data={state.meters}/> }
    </div>
  );
}

export default App;
