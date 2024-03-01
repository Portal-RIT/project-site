import { features } from '../objects/features.js';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import '../App.css';


function Features() {
	let navigate = useNavigate()

	const routeChange = (e) => {
		navigate("../project-site/feature/" + e.name, {state: {feature: e}})
	}

	return (
		<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
				{features.map((feature) => (
					<div className='block' onClick={() => routeChange(feature)}>
						<h1>{feature.name}</h1>
						<p>{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Features;