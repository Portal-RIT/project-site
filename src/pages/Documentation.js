
import { useLocation } from "react-router-dom";
import DOMAIN from "../img/Domain_Model.png";
import ARCHITECTURE from "../img/Architecture.png";
import BIG_PICTURE from "../img/Big Picture Plan.png";
import USER_PERMS from "../img/User Permission UML.png";
import MESSAGING from "../img/UML - Messaging.png";
import INTERFACE from "../img/Novena Senior Project - UML - Project Management.png";
import IMAGES from "../img/Novena Senior Project - UML - Image Processing.png";
import RELATIONAL from "../img/Novena Senior Project - Relational Entity Diagram.png";
import INTERFACE_DIAGRAM from "../img/Novena Senior Project - Interface Diagram.png";


function Documentation() {

	const location = useLocation();

	return (
		<div className="main-content">
			<h1>Domain Model</h1>
			<img src={DOMAIN} alt="Domain Model" width="100%" />
			<h1>Software Architecture</h1>
			
			<a href="https://docs.google.com/document/d/1vfwsHzLObee4xKyIZKxsGICr7fXZqzZAiXjz3rplp4s/edit?usp=sharing"> Architecturally Signifigant Requirements - Google Doc</a>
			<p/>
			<img src={ARCHITECTURE} alt="Architecture Diagram" width="100%"/>

			<h1>Project Timeline</h1>
			<img src={BIG_PICTURE} alt="Project Timeline" width="100%" />

			<h1>Pugh Diagrams</h1>
			
			<a href="https://docs.google.com/document/d/1nOusP8KOkajuHXe_AznhPF5ZHNlUjxGtQEWET3BYa0k/edit?usp=sharing"> File Storage - Google Doc </a>
			<br/>
			<a href="https://docs.google.com/spreadsheets/d/1wgiLb_rc9pfwwidQu64a1xMnPjhnV3DTYlcLEXbb-TA/edit?usp=sharing"> User Database - Google Sheets </a>

			

			<h1>Final Project Plan</h1>
			
			<a href="https://docs.google.com/document/d/1wmaDgJNvd19V3iqBhSzVXEKaSQRj82zdlFYH1MlYwIs/edit?usp=sharing"> Final Project Plan - Google Doc </a>

			<h1>UML Diagrams</h1>
			<h2>User Permissions</h2>
			<img src={USER_PERMS} alt="User Permissions UML" width="100%" />
			<h2>Messaging</h2>
			<img src={MESSAGING} alt="Messaging system UML" width="100%" />
			<h2>Project Management Interface</h2>
			<img src={INTERFACE} alt="Project Management Interface" width="100%"/>
			<h2>Image Processing</h2>
			<img src={IMAGES} alt="Image Processing" width="100%"/>

			<h1>Relational Database Diagram</h1>
			<img src={RELATIONAL} alt="Relational Database Diagram" width="100%"/>

			<h1>Interface Diagram</h1>
			<img src={INTERFACE_DIAGRAM} alt="Interface Diagram" width="100%"/>

			<h1>Tech Stack</h1>
			<ul style={{"list-style-type":"none"}}>
				<li>Relational Database (SQL)</li>	
				<li>Cloud Hosting for Database</li>
				<li>Document database (Images)</li>
				<li>Cloud Storage for Documents (Azure or AWS)</li>
				<li>Frontend: Javascript React / Angular</li>
				<li>Middleware: Flask, Spring Framework</li>
				<li>Backend: Python and Java Spring</li>
				<li>Chromium Web Browsers</li>
			</ul>			

			<h1>Portal Wireframe</h1>
			<iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FooflxXVx2vUXaBt2a0qg7w%2FPrototype%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DOXvpbGvMy23dshOv-1" allowfullscreen></iframe>

		</div>
	)
}

export default Documentation;