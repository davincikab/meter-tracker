import { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import * as turf from '@turf/turf'

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
  districtTowers:[],
  activeTower:null,
  isModalOpen:false,
  statusData,
  modalContent:"",
  searchField:"Cell Tower Name",
  districtPolygon:null
};

function MapPage() {  
  let info = {
      powerRating:Math.ceil(Math.random() * 2000),
      power:Math.ceil(Math.random() * 500),
      current:Math.ceil(Math.random() * 36),
      tilt:(Math.random() * 10).toFixed(1),
      generatorStatus:'Off',
      fuelLevel:Math.ceil(Math.random() * 100).toFixed(0),
      antennaLocation:'Normal',
      temperature:Math.ceil(Math.random() * 40),
      doorStatus:'Close - Lock',
      cctv:'Normal',
      windSpeed:Math.ceil(Math.random() * 40)
  };

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
    if(searchField == 'District') {
      let towers = cellTower.filter(tower => tower['District'] == val);

      let features = towers.map(tower => turf.point([parseFloat(tower.Long), parseFloat(tower.Latt)]));
      let fc = turf.featureCollection(features);
      let hull = turf.convex(fc);

      console.log(hull);
      
      setState({
        ...state,
        districtTowers:[...towers],
        value:val,
        districtPolygon:hull
      });

      // creat the convex hull
      return
    }

    let tower = cellTower.find(tower => tower['Cell Tower Name'] == val);
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
      activeTower:null,
      value:""
    })
  }

  const handleDistrictClick = (tower) => {
    console.log(tower);

    setState({
      ...state,
      activeTower:tower
    });
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

  const updateSearchField = (e) => {
    const { value } = e.target;
    // let { districtTowers, districtPolygon } = {}
    // if(value == 'Name') {

    // }

    setState({
      ...state,
      value:'',
      searchField:value,
      districtPolygon:null,
      districtTowers:[]
    });

  }

  const getDistrictsPolygon = (cellTowers) => {
    // group by districts

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
      return (
        <StatusContent 
            title={title} 
            data={data} 
            updateActiveTower={onSelect} 
          /> 
        )
    } else {
      return <WidgetItem type={title} data={data}  activeTower={activeTower} />
    }
  }

  const { meters, activeTower, districts, value, 
    isModalOpen, modalContent, statusData, searchField, 
    districtPolygon, districtTowers
  } = state;

  if(searchField == 'Districts') {

  }

  console.log(districts);
  return (
    <div className="map-wrapper">
      <div className='autoComplete_wrapper'>
        <div className='search-section'>
          <div className='icon-search'> 
              <FaSearch />
          </div>
          <Autocomplete
            getItemValue={(item) => searchField === 'District' ? item : item["Cell Tower Name"]}
            items={searchField !== 'District' ? [...cellTower] : [...districts]}
            shouldItemRender={(item, value) => {
              if(searchField === 'District') {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1
              }

              return item[searchField].toLowerCase().indexOf(value.toLowerCase()) > -1
            }}
            renderItem={(item, isHighlighted) =>
              <div 
                className="list-item" 
                style={{ 
                  background: isHighlighted ? '#ee6782' : 'white',
                  color:isHighlighted ? 'white' : '#333' 
                }} 
                key={searchField === 'District' ? item :item[searchField]}
              >
                { searchField === 'District' && ` ${item}`}
                { searchField !== 'District' && `${item["Cell Tower Name"]}, ${item["District"]}`}
              </div>
            }
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            onSelect={(val) => onSelect(val)}
            inputProps={{
              placeholder:'Search Cell Tower ...'
            }}
          />

          </div>
          {/* select the field */}
          <div className='section-field'>
            <div>
              <input 
                name="search_field" 
                type="radio" 
                value="Cell Tower Name" 
                id="tower" 
                onChange={updateSearchField} 
                checked={searchField === "Cell Tower Name"}
              />
              <label htmlFor='tower'>Name</label>
            </div>
            <div>
              <input  
                name="search_field"  
                type="radio"  
                value="District"  
                id="district"  
                onChange={updateSearchField} 
                checked={searchField === "District"}
              />
              <label htmlFor='district'>District</label>
            </div>
          </div>
      </div>

      <div className={searchField == 'District' ? "section-district" : 'section-district d-none'}>
          <h6 className='my-0'>Cell Towers in {value}</h6>
          <ul className="list-section">
            {
              districtTowers.map(tower => (
                <li 
                  className='list-item' 
                  key={tower['Cell Tower Name']}
                  onClick={(e) => handleDistrictClick(tower)}
                >
                  {tower['Cell Tower Name']}
                </li>
              ))
            }
            <li></li>
          </ul>
      </div>

      <WidgetSection 
        onItemClick={onWidgetClick} 
        activeTower={activeTower}
        info={info}
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
        districtPolygon={districtPolygon}
        info={info}
        /> 
      }

      {/* <img src='/assets/icons/location_red.png'/> */}
    </div>
  );
}

export default MapPage;


// BUGS TO SORT:
  // - Zoom levels (Map keeps zooming to default zoom level)
  // - map recenter
  // - Seeding color generation and random values generation
  // Sort the 3d Model