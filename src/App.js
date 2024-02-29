import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import './App.css';

const features = [
  {
    name: "Feature 1",
    start: "01-01-2024",
    end: "01-14-2024"
  },
  {
    name: "Feature 2",
    start: "01-14-2024",
    end: "01-28-2024"
  },
  {
    name: "Feature 3",
    start: "01-28-2024",
    end: "02-11-2024"
  },
]

const sprints = [
  {
    name: "Sprint 1",
    start: "01-01-2024",
    end: "01-14-2024"
  }
]
function App() {
  return (
    <div className="App">
      <Sidebar className='nav-bar'>
        <Menu>
          <MenuItem> Home </MenuItem>
          <MenuItem> Team </MenuItem>
          <SubMenu label="Features" >
            {
              features.map( feature => {
                return <MenuItem> {feature.name} </MenuItem>
              })
            }
          </SubMenu>
          <SubMenu label="Sprints">
            {
              sprints.map( sprint => {
                return <MenuItem> {sprint.name} </MenuItem>
              })
            }
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default App;
