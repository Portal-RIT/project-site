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

function FeatureDemo(props){
    const feature = grabFeature(props.name)
    const demo = feature.demo

    return(
        <div style={{width: '100%', height: '100%'}}>
            <video width="300em" height="300em" controls>
                <source src={`../demo/${demo}`} type='video/mp4'/>
            </video>
        </div>
    );
}

export default FeatureDemo