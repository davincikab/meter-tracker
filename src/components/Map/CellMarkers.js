import { useEffect, useState } from 'react';
import { Layer, Feature} from 'react-mapbox-gl';

const CellMarkers = ({ items, activeTower, threeD }) => {
    // console.log(items);

    const [state, setState ] = useState({
        clickedFeature:null,
    });

    useEffect(() => {
        setState({clickedFeature:null });

        console.log("Rerendering");
    }, [state.clickedFeature, threeD]);

    const handleMouseLeave = (e) => {
        e.target.getCanvas().style.cursor = "";
    }

    const handleMouseEnter = (e) => {
        e.target.getCanvas().style.cursor = "pointer";
    }

    const getIcon = () => {
        let icons = ['location_yellow','location_red','location_green'];

        let i = Math.ceil(Math.random() * 3);
        return icons[i];
    }

    const getIconColor = () => {
        let colors = ['#C7F500', '#F17B70', '#FFC500'];

        let i = Math.ceil(Math.random() * 2);
        return colors[i];
    }

    const addItemColors = (items) => {
        return items.map(item => {
            item.color = getIconColor();

            return item
        });

    
    }

    const renderFeatures = (items) => {
        if(threeD ) {
            items = items.filter(item => item['Cell Tower Name'] != activeTower['Cell Tower Name'])
        }

        console.log(threeD);
        return items.map((item, i) => ( <Feature 
            coordinates={[item.Long ,item.Latt]} 
            key={`item-${i}`} 
            properties={item}
        />));
    }

    let cellTowers = items ? addItemColors(items || []) : [];

    return (
        <>
            <Layer 
                id="cell-tower"
                type="symbol" 
                paint={{
                    "icon-color": ['get', 'color'], 
                }}
                layout={{  
                    "icon-image":"cell-tower",
                    "icon-size":0.2,
                    "icon-padding":0.08
                }}
                onMouseEnter={handleMouseEnter}
                omMouseLeave={handleMouseLeave}
            >
                { 
                   renderFeatures(cellTowers)
                }
            </Layer>
        </>
    )
}


export default CellMarkers;