import { sprints } from '../objects/sprints';
import { features } from '../objects/features';
import "../App.css"
import { FEATURES, HOME, SPRINTS, TEAM, SPRINT, FEATURE } from '../routes';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useHistory } from 'react';


function grabFeature(featureName){
    for(var i = 0; i < features.length; i++) {
        if(features[i].name == featureName) {
            return features[i];
        }
    }

    return false;
}

function grabSprint(sprintName) {
    for(var i = 0; i < sprints.length; i++) {
        if(sprints[i].name == sprintName) {
            return sprints[i];
        }
    }

    return false;
}

function changePage(navigate) {

    const sprintList = document.getElementById("sprint-list")

    if(sprintList != null) {
        const sprint = grabSprint(sprintList.value)

        navigate(SPRINT, { state: { sprint: sprint } })
    }
}

function addingEventListener(navigate) {
    const sprintList = document.getElementById("sprint-list")
    sprintList.addEventListener("onChange", () => changePage(navigate), false)
}

function FeatureOverview(props) {

    const feature = grabFeature(props.name)

    const navigate = useNavigate()

    const associatedSprints = feature.associated_sprints.map(sprint => 

            <option value={sprint}>
                <Link to={SPRINT} state={{ sprint: grabSprint(sprint) }} >{sprint}</Link>
            </option>

        );
    

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

                <select class="sprint-list" id="sprint-list">
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
                    <li class="check-label">
                        {task.map((item, innerIndex) =>
                            <React.Fragment>
                                {innerIndex === 0 ? (<h3>{item}</h3>) : 
                                    (item.startsWith("+") ? <label class="check-label"> <input checked type="checkbox"/>{item.slice(1)} </label> 
                                    : <label class="check-label"><input type="checkbox"/>{item}</label>)}
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