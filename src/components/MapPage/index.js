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

import { FaTimes } from 'react-icons/fa';

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
  districtPolygon:null,
  threeD:false
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
      threeD:tower ? true : false,
      value:val
    })
  }

  const onValueChange = (value) => {
    setState({
      ...state,
      value,
      threeD:false
    });

  }

  const resetActiveTower = () => {
    setState({
      ...state,
      activeTower:null,
      threeD:false,
      value:""
    });

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

  // toggle 3D view
  const toggle3DView = () => {
    setState({
      ...state,
      threeD:!state.threeD
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
    districtPolygon, districtTowers, threeD
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

      {/* 3d toggler */}
      {
        activeTower && 

        <div className='toggle-view'>
          <input 
            type="checkbox" 
            id="toggle-view" 
            onChange={toggle3DView} 
            checked={threeD} 
          />

          <label htmlFor='toggle-view' className='label'>3D</label>
        </div>
      }

      { (activeTower && threeD) &&
        <div className='popup-side-tab'>
          <div className='popup-body' >
                    <div className='popup-header'>
                        {/* <button className="mapboxgl-close-popup-button" onClick={resetActiveTower}>
                            CLOSE
                            <FaTimes />
                        </button> */}
                    </div>
                            
                    <div className='popup-section'>
                        <div className='popup-section__inner'>
                            <div>
                                <div className='popup-item'><div>Site Name: </div>  {activeTower["Cell Tower Name"]} </div>
                                <div className='popup-item'><div>District: </div>  {activeTower["District"]}</div>
                            </div>

                            <div className='status'> GOOD </div>
                        </div>
                      

                        <div className=''>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SUMMARY</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>Door</td>
                                        <td>Close (unlocked)</td>
                                    </tr>
                                    <tr>
                                        <td>Structure</td>
                                        <td>OK</td>
                                    </tr>
                                    <tr>
                                        <td>Illegal Installation</td>
                                        <td>None</td>
                                    </tr>
                                    <tr> 
                                        <td>Illegal Activity</td>
                                        <td>None</td>
                                    </tr>
                                    <tr> 
                                        <td>Energy</td>
                                        <td>Normal</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='popup-footer'>
                        <div className='popup-footer__inner'>
                            <img src="/assets/icons/activity.png" alt=''/>
                            <div>{info.powerRating} KW/h</div>
                        </div>
                        <div className='popup-footer__inner'>
                            <img src="/assets/icons/right-angle-of-90-degrees.png" alt=''/>
                            <div>Normal at {info.tilt} °</div>
                        </div>
                    </div>
                </div>
          </div>
      }
      

      { meters[0] && <MapComponent 
        data={meters} 
        activeTower={activeTower} 
        resetActiveTower={() => resetActiveTower(null)}
        updateActiveTower={onSelect}
        districtPolygon={districtPolygon}
        info={info}
        threeD={threeD}
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