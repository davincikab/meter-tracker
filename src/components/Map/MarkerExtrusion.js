import { useEffect, useState } from "react"
import * as turf from '@turf/turf';

import { Layer, Source } from "react-mapbox-gl";

const MarkerExtrusion = ({ activeTower }) => {
    const [state, setState] = useState({
        features:turf.featureCollection([])
    });

    useEffect(() => {
        // update features on tower change
        setState({
            features:getPointExtrusions(activeTower)
        });

        return function() {
            setState({features:turf.featureCollection([])})
        };
    }, [activeTower]);

    const getPointExtrusions = (activeTower) => {
        // point
        let pointFeature = turf.circle([
            activeTower.Long, activeTower.Latt
        ], 0.003, { properties:{...activeTower} });

        console.log(pointFeature);

        let features = JSON.stringify([
            {...pointFeature }, 
            {...pointFeature, }, 
            {...pointFeature}
        ]);

        features = JSON.parse(features);

        // update the baseheight info
        features = features.map(ft => ft).map((feature, i) => {
            feature.properties.point_name = `point-${i}`;

            feature.properties.height = i * 12 + 12;
            feature.properties.base_height = i * 12;
            feature.properties.color = ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e'][i]

            return feature;
        });
        
        // get the bbox of each layer
        let polys = features.map(feature => {
            let bbox = turf.bbox(feature);
            let poly = turf.bboxPolygon(bbox, {properties:{...feature.properties}});

            return poly;
        });

        console.log(polys);
        return turf.featureCollection(polys);
    }

    console.log(state.features);

    return (
        <>
            <Source     
                id="e-source" 
                geoJsonSource={{
                    type:'geojson',
                    data:state.features
                }} 
            />
            <Layer
                id="extrusion"
                type="fill-extrusion"
                sourceId="e-source"
                paint={{
                    "fill-extrusion-opacity":0.8,
                    "fill-extrusion-color":['get', 'color'],
                    "fill-extrusion-height":['get', 'height'],
                    "fill-extrusion-base":['get', "base_height"]
                }}
            >
            </Layer>
        </>
        
    )
}

export default MarkerExtrusion;