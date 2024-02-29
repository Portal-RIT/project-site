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
  
function NavBar ({features, sprints}) {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<Sidebar 
			collapsed={collapsed}
			onMouseEnter={() => setCollapsed(false)}
			onMouseLeave={() => setCollapsed(true)}
			style={{height: "100%"}}
			>
			<Menu>
				
			<MenuItem
				icon={ <BsFillHouseFill></BsFillHouseFill> }
			> Home </MenuItem>
			<MenuItem
				icon={ <HiUserGroup></HiUserGroup> }
			> Team </MenuItem>
			<SubMenu 
				label="Features" 
				icon= {<FaTasks></FaTasks>}
				>
				{
				features.map( feature => {
					return <MenuItem> {feature.name} </MenuItem>
				})
				}
			</SubMenu>
			<SubMenu 
				label="Sprints"
				icon={<LuIterationCcw></LuIterationCcw>}>
				{
				sprints.map( sprint => {
					return <MenuItem> {sprint.name} </MenuItem>
				})
				}
			</SubMenu>
			</Menu>
		</Sidebar>
	)
}

export default NavBar;