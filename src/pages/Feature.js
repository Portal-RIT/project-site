import { useLocation } from "react-router-dom";



function Feature() {
	const location = useLocation();
	const { feature } = location.state;

	return (
		<div>
			{ feature.name }
		</div>
	)
}

export default Feature;