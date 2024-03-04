import { sprints } from '../objects/sprints';
import { features } from '../objects/features';
import "../App.css"
import React from 'react';
import test from '../img/Test_Chart.png'
import time from '../img/Test_Time.png'

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

    const testString = "../img/Test_Chart.png"

    const testImage = require(testString)

    return (
        <div>
            <img class="track-img" src={test} alt={"Completion Tracking for " + feature.name}/>
            <img class="track-img" src={time} alt={"Time Tracking for " + feature.name}  />
        </div>
    );
}

export default FeatureTracking;