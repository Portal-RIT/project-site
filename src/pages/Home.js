
function Home() {
	return (
		<div className="main-content">
			<div>
				<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
					<div className="home_title_block">
						<h1 style={{paddingTop: '1rem', color: '#0066B4'}}>Novena Project Management Portal</h1>
						<h2>Team: Portal</h2>
					</div>

					<div className='home_text_block'>
						<h2 style={{ paddingLeft:'3%'}}>Project Summary</h2>
						<p className='home_text'>
						Novena is an all in one portal where both customers and employees can interact with each other about a project. This portal will contain the project itself where it will have all parties be able to view and manage the project’s lifetime as well as receive notifications about the project. The project, specifically, will contain key actions from customers and JADAK employees, milestones, status of the project, updates of deployed projects, and a graphical timeline of the project. The portal will also provide chat functionality for both customer and employee to send chat messages as well as view emails sent from outside the portal. The portal will also contain a location to store already preprocessed training image datasets from a variety of options ready for download to be used for custom solutions on JADAK’s smart camera training. Employees will be able to upload training image datasets that can be preprocessed from a library of options they desire. Finally, there will be a place for customers and employees to view and access documents and licenses that are relevant to them.
						</p>
					</div>

					<div className='home_text_block'>
						<h2 style={{ paddingLeft:'3%'}}>Current Features</h2>
						<p className='home_text'>
							No current features yet.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;