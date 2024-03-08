
import { useLocation } from "react-router-dom";
import DOMAIN from "../img/Domain_Model.png";
import ARCHITECTURE from "../img/Architecture.png";

function Documentation() {

	const location = useLocation();

	return (
		<div style={{"overflow-y":"scroll"}}>
			<h1>Domain Model</h1>
            <img src={DOMAIN} alt="Domain Model" height="600px" width="1250px" />
            <h1>Software Architecture</h1>
            
            <a href="https://docs.google.com/document/d/1vfwsHzLObee4xKyIZKxsGICr7fXZqzZAiXjz3rplp4s/edit?usp=sharing"> Architecturally Signifigant Requirements</a>
            <p/>
            <img src={ARCHITECTURE} alt="Architecture Diagram" height="750px" width="1250px"/>
		</div>
	)
}

export default Documentation;