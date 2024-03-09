import { teamMembers } from '../objects/teamMembers.js';


function Team() {
	return (
		<div className='main-content'>
			<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<div>
					{teamMembers.map((teamMember) => (
						<div className='team_block' style={{textAlign: 'left'}}>
							<h1 className='team_header'>{teamMember.name} | {teamMember.role}</h1>
							<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
								<img src={`${teamMember.image}`} style={{height: '13vh', width: 'auto', marginLeft:'3%', borderRadius: '50%'}}></img>
								<p className='team_text'>
									{teamMember.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		
	)
}

export default Team;