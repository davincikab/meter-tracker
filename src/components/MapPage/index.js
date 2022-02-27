import { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import MapComponent from '../Map';
import WidgetSection from '../Widgets';
import StatusSection from '../StatusSection';

import mapReq from '../../utils/getMapData';
import Autocomplete from 'react-autocomplete';
import { cellTower, statusData } from "../../mocks/data";
import Modal from '../Modal';
import StatusContent from '../StatusSection/StatusContent';
import WidgetItem from '../Widgets/WidgetItems';

const INITIAL_STATE = {
  meters:[],
  value:"",
  districts:[],
  activeTower:null,
  isModalOpen:false,
  statusData,
  modalContent:""
};

function MapPage() {  
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
      async function fetchData() {
          let data = await mapReq.getMeters();

          let dist = [...new Set(cellTower.map(item => item.District)) ];
          console.log(dist);

          setState({
            ...state,
            meters:data,
            districts:dist
          });
      } 

      if(!meters[0]) {
        fetchData();
      }
      
  }, [state.meters]);

  const onSelect = (val) => {
    let tower = cellTower.find(tower => tower['Cell Tower Name'] == val);
    
    console.log(tower);

    setState({
      ...state,
      activeTower:tower || null,
      value:val
    })
  }

  const onValueChange = (value) => {
    setState({
      ...state,
      value
    })
  }

  const resetActiveTower = () => {
    setState({
      ...state,
      activeTower:null
    })
  }

  const handleDistrictClick = (district) => {
    console.log(district);
  }

  const onStatusItemClick = (status) => {
    let modalContent = getModalContent(true, status,state.statusData[status]);

    // get the status data
    setState({
      ...state,
      isModalOpen:true,
      modalContent
    });


  }

  const onWidgetClick = (widget) => {
    let modalContent = getModalContent(false, widget, []);
    
    // get the status data
    setState({
      ...state,
      isModalOpen:true,
      modalContent
    });
  }

  const closeModal = () => {
    setState({
      ...state,
      isModalOpen:false
    });

  }

  const getModalContent = (isStatus, title, data) => {
    if(isStatus) {
      return ( <StatusContent title={title} data={data} /> )
    } else {
      return <WidgetItem type={title} data={data}  activeTower={activeTower} />
    }
  }

  const { meters, activeTower, districts, value, 
    isModalOpen, modalContent, statusData
  } = state;

  console.log(isModalOpen);
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
          onChange={(e) => onValueChange(e.target.value)}
          onSelect={(val) => onSelect(val)}
          inputProps={{
            placeholder:'Search Cell Tower ...'
          }}
        />


        {/* select the field */}
        <div className='section-field'>
          <div>
            <input name="field" type="radio"/>
            <label>Name</label>
          </div>
          <div>
            <input name="field" type="radio"/>
            <label>District</label>
          </div>
        </div>
      </div>

      <div className="section-district d-none">
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

      <WidgetSection 
        onItemClick={onWidgetClick} 
        activeTower={activeTower}
      />

      <Modal 
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        {modalContent}
      </Modal>

      <StatusSection 
        onItemClick={onStatusItemClick} 
        sites={meters.length}
        data={statusData} 
      />

      { meters[0] && <MapComponent 
        data={meters} 
        activeTower={activeTower} 
        resetActiveTower={() => resetActiveTower(null)}
        updateActiveTower={onSelect}
        /> 
      }
    </div>
  );
}

export default MapPage;
