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

    feature = grabFeature(props.name)

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
        </div>
    );
}