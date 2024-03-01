import { sprints } from './objects/sprints';
import { features } from './objects/features';

function grabFeature(featureName){
    for(item in features) {
        if(item.name == featureName) {
            return item;
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
            <h1>Description</h1>
            <br/>
            <p>feature.description</p>
            <br/>
            <select>{associatedSprints}</select>
            <br/>
            <div>
                <p>put f1, f2, and f3 in grid here</p>
            </div>
        </div>
    );
}