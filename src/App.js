import { useEffect, useState } from 'react';
import './App.css';

import { FaSearch } from 'react-icons/fa';

import MapComponent from './components/Map';
import mapReq from './utils/getMapData';
import Autocomplete from 'react-autocomplete';
import { cellTower } from "./mocks/data";

function App() {
  const [meters, setMeters ] = useState([]);
  const [value, setValue ] = useState("");
  const [ activeTower, setActiveTower ] = useState(null);
  

  useEffect(() => {
      async function fetchData() {
          let data = await mapReq.getMeters();
          setMeters(data)
      } 

      if(!meters[0]) {
        fetchData();
      }
      
  }, [meters]);

  const onSelect = (val) => {
    let tower = cellTower.find(tower => tower['Cell Tower Name'] == val);
    if(tower) {
      setActiveTower(tower)
    }

    setValue(val)
  }


  console.log(meters);

  return (
    <div className="map-wrapper">
      <div className='autoComplete_wrapper'>
        <div className='icon-search'> 
            <FaSearch />
        </div>
        <Autocomplete
          getItemValue={(item) => item["Cell Tower Name"]}
          items={[...cellTower]}
          shouldItemRender={(item, value) => item["Cell Tower Name"].toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, isHighlighted) =>
            <div 
              className="list-item" 
              style={{ 
                background: isHighlighted ? '#ee6782' : 'white',
                color:isHighlighted ? 'white' : '#333' 
              }} 
              key={item["Cell Tower Name"]}
            >
              {item["Cell Tower Name"]}, {item["District"]}
            </div>
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(val) => onSelect(val)}
          inputProps={{
            placeholder:'Search Cell Tower ...'
          }}
        />
      </div>

      { meters[0] && <MapComponent 
        data={meters} 
        activeTower={activeTower} 
        resetActiveTower={() => setActiveTower(null)}
        /> 
      }
    </div>
  );
}

export default App;
