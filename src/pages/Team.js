import { teamMembers } from '../objects/teamMembers.js';


function Team() {
	return (
		<div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1em'}}>
				{teamMembers.map((teamMember) => (
					<div className='team_block' style={{textAlign: 'left'}}>
						<h1 className='team_header'>{teamMember.name} | {teamMember.role}</h1>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
							<img src={`${teamMember.image}`} style={{height: '7em', width: 'auto', marginLeft:'3%', borderRadius: '50%'}}></img>
							<p className='team_text'>
								{teamMember.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Team;