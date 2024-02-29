
import * as React from 'react';
import '../App.css';
import TitleCard from '../components/TitleCard';

function Sprints() {
	return (
		<div className='main-content'>
			<TitleCard title="Sprint Progress"></TitleCard>
			
			<div className='content-100w-card' style={{"margin-bottom": "0px"}}>
			</div>

			<div className='horizontal content-small-height'>
				<div className='content-60w-card' style={{"margin-right": "1%"}}>
					
				</div>

				<div className='content-40w-card' style={{"margin-left": "1%"}}>

				</div>
			</div>
			
		</div>
	)
}

export default Sprints;