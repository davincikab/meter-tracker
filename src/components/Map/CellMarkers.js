import { useEffect, useState } from 'react';
import { Layer, Feature} from 'react-mapbox-gl';

const CellMarkers = ({ items}) => {
    // console.log(items);

    const [state, setState ] = useState({
        clickedFeature:null,
    });

    useEffect(() => {
        setState({clickedFeature:null });
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
                id="cell-tower"
                type="symbol" 
                layout={{ "icon-image": "cell-tower",  "icon-size":0.75}}
                paint={{"icon-color":"red"}}
                onMouseEnter={handleMouseEnter}
                omMouseLeave={handleMouseLeave}
            >
                { 
                    items.map(item => (
                        <Feature 
                            coordinates={[item.Long, parseFloat(item.Latt)]} 
                            key={item['Cell Tower Name']} 
                            properties={item}
                        /> 
                    ))
                }
            </Layer>
        </>
    )
}


export default CellMarkers;