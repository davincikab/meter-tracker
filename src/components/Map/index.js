import { useState} from 'react';

import ReactMapboxGl, {Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import meter from '../../assets/icons/electric-meter.png';


import Markers from './Markers';

const Map = ReactMapboxGl({
  accessToken:
  'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA'
});

const MapComponent = (props) => {
    const [state, setState ] = useState({
        isIconLoaded:false,
        meters:[...props.data],
        center:[101.69973647896333, 3.1419323464180278],
        clickedFeature:null
    });

    const handleClick = (map, e) => {
        let features = map.queryRenderedFeatures(e.point, {layers:['meters']});

        setState({
            ...state,
            clickedFeature:features[0] ? features[0].properties : null,
            isIconLoaded:true,
            center:map.getCenter()
        });
    }

    const handleStyleLoad = (map, e) => {
        
        if(!map.hasImage('electric-meter')) {
            map.loadImage(meter, function(error, image) {
                if (error) { console.log(error); return };

                map.addImage('electric-meter', image);
                
                setState({...state, isIconLoaded:true});
                
            });
        }
    }

    const { meters, isIconLoaded, center, clickedFeature } = state;
    return (
        <Map
            style="mapbox://styles/mapbox/light-v10"
            center={center}
            zoom={[14]}
            pitch={[0]}
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            onStyleLoad={handleStyleLoad}
            onClick={handleClick}
        >   
            {
                isIconLoaded &&
                <Markers 
                    items={props.data} 
                />
            }

            {   
                clickedFeature && 
                <Popup
                    coordinates={[clickedFeature.lng, clickedFeature.lat]}
                    closeOnClick={true}
                >
                        
                    <div className='popup-body' >
                        <h1>{clickedFeature.meterName}</h1>
                        <div className='popup-section'>
                            <div className='popup-item'><div>Location </div>  {clickedFeature.locationName} </div>
                            <div className='popup-item'><div>Group Name </div>  {clickedFeature.groupName}</div>
                        </div>
                    </div>
                </Popup>
            }
        </Map>
    )
}

export default MapComponent;