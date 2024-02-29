
import { useLocation } from "react-router-dom";

function Sprint() {

	const location = useLocation();
	const { sprint } = location.state;

	return (
		<div>
			{sprint.name}
		</div>
	)
}

export default Sprint;