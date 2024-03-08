
import { useLocation } from "react-router-dom";
import DOMAIN from "../img/Domain_Model.pdf";
import ARCHITECTURE from "../img/Architecture.pdf";

function Documentation() {

	const location = useLocation();

	return (
		<div>
			<h1>Domain Model</h1>
            <img src={DOMAIN} alt="Domain Model"/>
            <h1>Software Architecture</h1>
            <img src={ARCHITECTURE} alt="Architecture Diagram"/>
		</div>
	)
}

export default Documentation;