import { useLocation } from "react-router-dom";
import FeatureOverview from "../components/FeatureOverview.js"
import FeatureTracking from "../components/FeatureTracking.js"
import { useState } from "react";



function Feature() {
	const [selected, setSelected] = useState("Overview")
	const location = useLocation();
	const { feature } = location.state;

	const changeSelected = (e) => {
		setSelected(e)
	}

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
					<h1 onClick={() => changeSelected("Overview")} style={{backgroundColor: selected === "Overview" ? '#007DD3' : ''}}>Overview</h1>
					<h1 onClick={() => changeSelected("Tracking")} style={{backgroundColor: selected === "Tracking" ? '#007DD3' : ''}}>Tracking</h1>
					<h1 onClick={() => changeSelected("Demo")} style={{backgroundColor: selected === "Demo" ? '#007DD3' : ''}}>Demo</h1>
				</div>

				<div className="feature_info_block">
					{
						selected === "Overview" ? 
						<FeatureOverview name={feature.name}/> 
						: selected === "Tracking" ? 
						<FeatureTracking name={feature.name}/> : 
						<div>Demo</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Feature;