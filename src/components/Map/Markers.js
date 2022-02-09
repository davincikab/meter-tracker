import { useEffect, useState } from 'react';
import { Layer, Feature, Popup} from 'react-mapbox-gl';

const Markers = ({ items}) => {
    const [state, setState ] = useState({
        clickedFeature:null,
    });

    useEffect(() => {
        setState({...state, clickedFeature:null });
    },[]);

    
    const handleClick = (e) => {
        console.log(e);

        setState(
            Object.assign({}, {...state}, { 
                clickedFeature:e.feature.properties }
            ) 
        );
    }

    const handleMouseLeave = (e) => {
        e.target.getCanvas().style.cursor = "";
    }

    const handleMouseEnter = (e) => {
        e.target.getCanvas().style.cursor = "pointer";
    }

    const { clickedFeature } = state;

    return (
        <>
            <Layer 
                id="meters"
                type="symbol" 
                layout={{ "icon-image": "electric-meter",  "icon-size":0.5}}
                paint={{"icon-color":"red"}}
                onMouseEnter={handleMouseEnter}
                omMouseLeave={handleMouseLeave}
            >
                { 
                    items.map(item => (
                        <Feature 
                            coordinates={[item.lng, item.lat]} 
                            key={item.id} 
                            properties={item}
                        /> 
                    ))
                }
            </Layer>
        </>
    )
}


export default Markers;