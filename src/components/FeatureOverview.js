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

function FeatureOverview(props) {

    const feature = grabFeature(props.name)

    const associatedSprints = feature.associated_sprints.map(sprint => 
            <option value={sprint}>{sprint}</option>
        );
    
    // const taskList = 
    // );

    if(!(feature)) {
        return (
            <div>
                <h1>Can Not Find This Feature</h1>
            </div>
        );
    }

    return(
        <div class="flex-container">
            <div>
                <h1 class="feature-contents">Description</h1>

                <select class="sprint-list">
                    <option hidden>Associated Sprints</option>
                    {associatedSprints}
                </select>
            </div>

            <div>
                <p class="feature-contents">{feature.description}</p>
            </div>
            
            <div>
                <h1 class="feature-contents">Task Checklist</h1>
            </div>

            <div>
            <ul class="flex-tasklist">
                {feature.tasks.map((task, outerIndex) =>
                    <li>
                        {task.map((item, innerIndex) =>
                            <React.Fragment>
                                {innerIndex === 0 ? (<h3>{item}</h3>) : (<label><input type="checkbox"/>{item}</label>)}
                            </React.Fragment>
                        )}
                    </li>
                )}
            </ul>
            </div>
            

        </div>
    );
}

export default FeatureOverview;