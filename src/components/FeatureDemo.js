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
        <div>
            <video style={{height: '50vh', width: '50vw'}}>
                <source src={`../demo/${demo}`} />
            </video>
        </div>
    );
}

export default FeatureDemo