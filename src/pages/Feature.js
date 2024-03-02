import { useLocation } from "react-router-dom";
import FeatureOverview from "../components/FeatureOverview.js"
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
					<h1 onClick={() => changeSelected("Overview")}>Overview</h1>
					<h1 onClick={() => changeSelected("Tracking")}>Tracking</h1>
					<h1 onClick={() => changeSelected("Demo")}>Demo</h1>
				</div>

				<div className="feature_info_block">
					{
						selected === "Overview" ? 
						<FeatureOverview name={feature.name}/> 
						: selected === "Tracking" ? 
						<div>Tracking</div> : 
						<div>Demo</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Feature;