import { useEffect, useState } from 'react';

import { FaLightbulb, FaSearch, FaTimes } from 'react-icons/fa';

import MapComponent from '../Map';
import WidgetSection from '../Widgets';
import StatusSection from '../StatusSection';

import mapReq from '../../utils/getMapData';
import Autocomplete from 'react-autocomplete';
import { cellTower } from "../../mocks/data";
import Modal from '../Modal';

function MapPage() {
  const [meters, setMeters ] = useState([]);
  const [value, setValue ] = useState("");
  const [districts, setDistricts ] = useState([]);
  const [ activeTower, setActiveTower ] = useState(null);
  

  useEffect(() => {
      async function fetchData() {
          let data = await mapReq.getMeters();

          let dist = [...new Set(cellTower.map(item => item.District)) ];
          console.log(dist);

          setDistricts(dist);

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

  const handleDistrictClick = (district) => {
    console.log(district);
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

      <div className="section-district">
          <h6 className='my-0'>Districts</h6>
          <ul className="list-section">
            {
              districts.map(district => (
                <li 
                  className='list-item' 
                  key={district}
                  onClick={(e) => handleDistrictClick(district)}
                >
                  {district}
                </li>
              ))
            }
            <li></li>
          </ul>
      </div>

      <WidgetSection />
      <Modal />
      <StatusSection />

      { meters[0] && <MapComponent 
        data={meters} 
        activeTower={activeTower} 
        resetActiveTower={() => setActiveTower(null)}
        /> 
      }
    </div>
  );
}

export default MapPage;
