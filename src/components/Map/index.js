import React, { useEffect, useState} from 'react';

import { FaTimes } from 'react-icons/fa';
import ReactMapboxGl, {Popup, GeoJSONLayer } from 'react-mapbox-gl';
import * as turf from '@turf/turf'
import 'mapbox-gl/dist/mapbox-gl.css';

import meter from '../../assets/icons/electric-meter.png';
import cellTowerIcon from '../../assets/icons/signal-tower.png';

import { cellTower } from "../../mocks/data";


import Markers from './Markers';
import CellMarkers from './CellMarkers';
// import customLayer from './utils/customLayer';

const Map = ReactMapboxGl({
  accessToken:
  'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA'
});

const MapComponent = ({data, activeTower, resetActiveTower, updateActiveTower, districtPolygon }) => {
    const [state, setState ] = useState({
        isIconLoaded:false,
        isTowerIconLoaded:false,
        meters:[...data],
        center:[101.615067, 3.082352],
        // center:[148.9819, -35.39847],
        clickedFeature: null,
        cellTowers:[...cellTower],
        activeCellTower:null,
        zoom:19
    });

    const mapRef = React.useRef(null);

    useEffect(() => {
        if(activeTower) {
            setState({
                ...state,
                center:[activeTower.Long, parseFloat(activeTower.Latt)],
                // activeCellTower:activeTower
            })
        }

        if(districtPolygon && mapRef) {
            let { map } = mapRef.current.state;

            console.log(map);

            let bounds = turf.bbox(districtPolygon);
            map.fitBounds(bounds, { paddding:150});
        }

        console.log(mapRef);

    }, [activeTower, districtPolygon]);

    const handleClick = (map, e) => {
        let features = map.queryRenderedFeatures(e.point, { layers:[ 'cell-tower'] });
        let layer = features[0] ? features[0].layer.id : "";

        if(layer == 'cell-tower') {
            console.log("Cell tower");

            updateActiveTower(features[0].properties['Cell Tower Name'])
            return;
        }
        setState({
            ...state,
            clickedFeature:features[0] ? {...features[0].properties, layer} : null,
            isIconLoaded:true,
            isTowerIconLoaded:true,
            center:map.getCenter(),
            zoom:map.getZoom()
        });

        
    }

    const handleStyleLoad = (map, e) => {
        
        if(!map.hasImage('electric-meter')) {
            map.loadImage(meter, function(error, image) {
                if (error) { console.log(error); return };
                console.log(image);

                map.addImage('electric-meter', image);
                
                setState({...state, isIconLoaded:true});
                
            });
        }

        if(!map.hasImage('cell-tower')) {          
            map.loadImage(cellTowerIcon, function(error, image) {
                if (error) { console.log(error); return }; 

                map.addImage('cell-tower', image, {sdf:true});
                setState({...state, isTowerIconLoaded:true, isIconLoaded:true});
            });
        }

        // map.addLayer(customLayer, 'waterway-label');
    }

    const { isIconLoaded, isTowerIconLoaded, center, clickedFeature, cellTowers, activeCellTower } = state;
    console.log(activeCellTower);
    return (
        <Map
            ref={mapRef}
            style="mapbox://styles/mapbox/dark-v10"
            center={center}
            zoom={[activeTower ? 18 : 19]}
            pitch={[45]}
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            onStyleLoad={handleStyleLoad}
            onClick={handleClick}
        >   
            
            {
                isTowerIconLoaded &&
                <CellMarkers 
                    items={cellTowers} 
                />
            }

            {   
                activeTower && 
                <PopupEl
                    lng={activeTower.Long} 
                    lat={parseFloat(activeTower.Latt)}
                    feature={activeTower}
                    layer={'cell-tower'}
                    resetActiveTower={resetActiveTower}
                />
            }


            {   
                clickedFeature && 
                <PopupEl
                    lng={clickedFeature.lng || clickedFeature.Long} 
                    lat={clickedFeature.lat || clickedFeature.Latt}
                    feature={clickedFeature}
                    layer={clickedFeature.layer}
                    
                />
            }

            {
                districtPolygon &&
                <GeoJSONLayer
                    data={districtPolygon}
                    fillPaint={{
                        "fill-color":'rgb(209, 172, 9)',
                        "fill-opacity":0.4
                    }}
                    symbolLayout={{
                        "text-field": "{place}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, 0.6],
                        "text-anchor": "top"
                    }}
                    before={"cell-tower"}
                />
            }
        </Map>
    )
}

const PopupEl = ({ lat, lng, feature, resetActiveTower, layer}) => {
    return (
        <Popup
            coordinates={[lng, lat]}
            offset={{
                'bottom-left': [12, -38],  'bottom': [0, -18], 'bottom-right': [-12, -38]
            }}
        >
           <PopupInfo 
                layer={layer} 
                feature={feature} 
                resetActiveTower={resetActiveTower} 
            /> 
        </Popup>
    )
}

const PopupInfo = ({layer, feature, resetActiveTower}) => {
    if(layer != 'meters') {
        return (
            <div className='popup-body' >
                <div className='popup-header'>
                    <button className="mapboxgl-close-popup-button" onClick={resetActiveTower}>
                        CLOSE
                        <FaTimes />
                    </button>
                </div>
                        
                <div className='popup-section'>
                    <div className='popup-section__inner'>
                        <div>
                            <div className='popup-item'><div>Site Name: </div>  {feature["Cell Tower Name"]} </div>
                            <div className='popup-item'><div>District: </div>  {feature["District"]}</div>
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
                        <div>1821 KW/h</div>
                    </div>
                    <div className='popup-footer__inner'>
                        <img src="/assets/icons/right-angle-of-90-degrees.png" alt=''/>
                        <div>Normal at 0<sup>0</sup></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='popup-body' >
                <h1>{feature.meterName}</h1>
                <div className='popup-section'>
                    <div className='popup-item'><div>Location </div>  {feature.locationName} </div>
                    <div className='popup-item'><div>Group Name </div>  {feature.groupName}</div>
                </div>
            </div>
        );
    }
    
}

export default MapComponent;

// Black theme

// Color the pins
// Color Geofences
//  Widgets