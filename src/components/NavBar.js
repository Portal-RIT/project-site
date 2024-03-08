/**
 * Takes care of the navigation on our webpage.
 * @author Zoe Bingham
 */

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useState } from 'react';
import { BsFillHouseFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { LuIterationCcw } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FEATURES, HOME, SPRINTS, TEAM, SPRINT, FEATURE, DOCUMENTATION } from '../routes';

function NavBar ({features, sprints}) {
	const [collapsed, setCollapsed] = useState(true);
	const [stickyOpen, setStickyOpen] = useState(false);

	return (
		<Sidebar 
			collapsed={stickyOpen && collapsed}
			onMouseEnter={() => setCollapsed(false)}
			onMouseLeave={() => setCollapsed(true)}
			onClick={() => setStickyOpen(!stickyOpen)}
			style={{height: "100%"}}
			>
			<Menu>
				<MenuItem
					icon={ <BsFillHouseFill></BsFillHouseFill> }
					component={<Link to={HOME} />}
				> Home </MenuItem>

				<MenuItem
					icon={ <HiUserGroup></HiUserGroup> }
					component={ <Link to={TEAM} /> }
				> Team </MenuItem>

				<SubMenu 
					label="Features" 
					icon= {<FaTasks></FaTasks>}
					component={ <Link to={FEATURES} /> }
				>
					{
					features.map( feature => {
						return (
							<MenuItem
								component={
									<Link 
										to={ FEATURE + "/" + feature.name} 
										state={{ feature: feature}} 
									/> 
								}
							> 
								{feature.name} 
							</MenuItem>
						);
					})
					}
				</SubMenu>

				<SubMenu 
					label="Sprints"
					icon={<LuIterationCcw></LuIterationCcw>}
					component={
						<Link 
							to={SPRINTS} 
							state={{ sprints: sprints }} 
						/> 
					}
				>
					{
						sprints.map( sprint => {
							return (
								<MenuItem
									component={
										<Link 
											to={ `${SPRINT}/${sprint.name}`} 
											state={{ sprint: sprint }} 
										/> 
									}
								> 
									{sprint.name} 
								</MenuItem>
							);
						})
					}
				</SubMenu>
				
				<MenuItem
					icon={ <HiUserGroup></HiUserGroup> }
					component={ <Link to={DOCUMENTATION} /> }
				> Documentation </MenuItem>

			</Menu>
		</Sidebar>
	)
}

export default NavBar;