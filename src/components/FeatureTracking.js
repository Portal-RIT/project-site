import { sprints } from '../objects/sprints';
import { features } from '../objects/features';
import "../App.css"
import React from 'react';

function grabFeature(featureName){
    for(var i = 0; i < features.length; i++) {
        if(features[i].name == featureName) {
            return features[i];
        }
    }

    return false;
}

function FeatureTracking(props) {

    const feature = grabFeature(props.name)
    const chart = feature.tracking[0]
    const report = feature.tracking[1]


    return (
        <div>
            <img class="track-img" src={`../img/${chart}`} alt={"Completion Tracking for " + feature.name}/>
            <img class="track-img" src={`../img/${report}`} alt={"Time Tracking for " + feature.name}  />
        </div>
    );
}

export default FeatureTracking;