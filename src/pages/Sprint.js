
import { useLocation } from "react-router-dom";
import '../App.css';
import TitleCard from "../components/TitleCard";


function Sprint() {

	const location = useLocation();
	const { sprint } = location.state;

	console.log( sprint )

	return (
		<div className="main-content">
			<TitleCard title={sprint.name}></TitleCard>
			<div className="horizontal" style={{height: "80%"}}>
				<div className="content-50w-card" style={{marginRight: "1%"}}>
					<h2>Tasks</h2>
					<p>
						{sprint.tasks}
					</p>
				</div>
				<div className="content-50w-card" style={{marginLeft: "1%"}}>
					<h2>Updates</h2>
					<p>
						{sprint.updates}
					</p>
				</div>
			</div>
			
		</div>
	)
}

export default Sprint;