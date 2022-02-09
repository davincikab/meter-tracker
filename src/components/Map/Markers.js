import { useEffect, useState } from 'react';
import { Layer, Feature} from 'react-mapbox-gl';

const Markers = ({ items}) => {
    const [state, setState ] = useState({
        clickedFeature:null,
    });

    useEffect(() => {
        setState({...state, clickedFeature:null });
    }, [state.clickedFeature]);

    const handleMouseLeave = (e) => {
        e.target.getCanvas().style.cursor = "";
    }

    const handleMouseEnter = (e) => {
        e.target.getCanvas().style.cursor = "pointer";
    }

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