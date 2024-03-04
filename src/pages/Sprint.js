
import { useLocation } from "react-router-dom";
import '../App.css';
import TitleCard from "../components/TitleCard";


function Sprint() {

	const location = useLocation();
	const { sprint } = location.state;

	console.log( sprint )

	return (
		<div className="main-content">
			<TitleCard title={sprint.name} subtitle={`${sprint.start}    -    ${sprint.end}`}></TitleCard>
			<div className="horizontal" style={{height: "80%"}}>
				<div className="content-50w-card" style={{marginRight: "1%"}}>
					<div className="innerContent">
						<h2>Tasks</h2>
						<p>
							{sprint.tasksDescription}
						</p>

						<ul>
							{
								sprint.tasks.map(task => {
									return (
										<li> {task} </li>
									)
								})
							}
							
						</ul>
					</div>
				</div>

				<div className="content-50w-card" style={{marginLeft: "1%"}}>
					<div className="innerContent">
					<h2>Updates</h2>
					<p>
						{sprint.updatesDescription}
					</p>

					<ul>
						{
							sprint.updates.map(update => {
								return (
									<li> {update} </li>
								)
							})
						}
					</ul>

					</div>
					
				</div>
			</div>
			
		</div>
	)
}

export default Sprint;