import { sprints } from '../objects/sprints';
import { features } from '../objects/features';
import "../App.css"

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

    if(!(feature)) {
        return (
            <div>
                <h1>Can Not Find This Feature</h1>
            </div>
        );
    }

    return(
        <div>
            <h1 class="feature-contents">Description</h1>

            <select class="sprint-list">{associatedSprints}</select>

            <p class="feature-contents">{feature.description}</p>

            <h1 class="feature-contents">Task Checklist</h1>

            <div class="grid-tasklist">
                <p>put f1, f2, and f3 in grid here</p>
            </div>
        </div>
    );
}

export default FeatureOverview;