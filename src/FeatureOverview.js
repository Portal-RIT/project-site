import featureData from 'src/features.json';

function grabFeature(featureName){
    for (item in featureData) {
        if(item.name == featureName) {
            return item;
        }
    }
}

function FeatureOverview(props) {

    feature = grabFeature(props.name)

    return(
        <div>
            <h1>Description</h1>
            <br/>
            <p>feature.description</p>
        </div>
    );
}