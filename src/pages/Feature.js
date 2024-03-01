import { useLocation } from "react-router-dom";
import FeatureOverview from "../components/FeatureOverview.js"



function Feature() {
	const location = useLocation();
	const { feature } = location.state;

	return (
		<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
				<div className="feature_title_block">
					<h1 style={{paddingTop: '1rem'}}>{feature.name}</h1>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<h2>Start</h2>
						<h2 >{feature.start}</h2>
					</div>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<h2>End</h2>
						<h2>{feature.end}</h2>
					</div>
				</div>

				<div className="feature_options_block">
					<h1>Overview</h1>
					<h1>Tracking</h1>
					<h1>Demo</h1>
				</div>

				<div className="feature_info_block">
					<FeatureOverview name="Feature 2"/>
				</div>
			</div>
		</div>
	)
}

export default Feature;