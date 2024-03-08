
import * as React from 'react';
import '../App.css';
import TitleCard from '../components/TitleCard';
import { useLocation, useNavigate } from 'react-router-dom';

function Sprints() {
	const location = useLocation()
	const { sprints } = location.state;

	let navigate = useNavigate();

	const routeToSprint = (event) => {
		navigate('../project-site/sprint/' + event.name, {state: {sprint: event}})
	}

	return (
		<div className='main-content'>
			<TitleCard title="Sprint Index"></TitleCard>
			
			<div className='sprints-index'>
				{
					sprints.map(sprint => {
						console.log(sprint)
						return (
							<div className='block' onClick={() => routeToSprint(sprint)}>
								<h1>{sprint.name}</h1>
								<p>{sprint.description}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Sprints;