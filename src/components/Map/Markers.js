import { useEffect, useState } from 'react';
import { Layer, Feature} from 'react-mapbox-gl';

const Markers = ({ items, activeTower, threeD }) => {
    const [state, setState ] = useState({
        clickedFeature:null,
        threeD:false
    });

    useEffect(() => {
        setState({ clickedFeature:null, threeD:threeD });
        
        console.log("Rerendering");

    }, [state.clickedFeature, threeD]);

    const handleMouseLeave = (e) => {
        e.target.getCanvas().style.cursor = "";
    }

    const handleMouseEnter = (e) => {
        e.target.getCanvas().style.cursor = "pointer";
    }

    const renderFeature = (item) => {
        
        if(state.threeD && (item['Cell Tower Name'] != activeTower['Cell Tower Name'])) {
            return <Feature 
                coordinates={[item.lng, item.lat]} 
                key={item.id} 
                properties={item}
            /> 
        }

        return <Feature 
            coordinates={[item.lng, item.lat]} 
            key={item.id} 
            properties={item}
        /> ;
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
                    items.map(item => renderFeature(item))
                }
            </Layer>
        </>
    )
}


export default Markers;