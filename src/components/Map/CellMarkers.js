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

    const getIconColor = () => {
        let colors = ['#e41a1c','#377eb8','#4daf4a','#984ea3'];

        let i = Math.ceil(Math.random() * 3);
        return colors[i];
    }
    return (
        <>
            <Layer 
                id="cell-tower"
                type="symbol" 
                layout={{ "icon-image": "cell-tower",  "icon-size":0.75}}
                paint={{"icon-color":getIconColor()}}
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