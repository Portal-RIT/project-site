import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Team from './pages/Team';
import Features from './pages/Features';
import Sprints from './pages/Sprints';
import Feature from './pages/Feature';
import Sprint from './pages/Sprint';
import { BASE_LOCATION } from './routes';
import { sprints } from './objects/sprints';
import { features } from './objects/features';
import "@fontsource/montserrat";

function App() {

  return (
    <div className="App" style={{height: "100%", backgroundColor: '#D9D9D9'}}>
      <BrowserRouter>
        
        <NavBar
          features={features}
          sprints={sprints}
        ></NavBar>

        <Routes>
          <Route path={BASE_LOCATION} element={ <Home/> }/>
          <Route path={BASE_LOCATION + "/team"} element={ <Team/> }/>
          <Route path={BASE_LOCATION + "/features"} element={ <Features/> }/>
          <Route path={BASE_LOCATION + "/sprints"} element={ <Sprints/> } />
          <Route path={BASE_LOCATION + "/feature/:featureName"} element={ <Feature/> }/>
          <Route path={BASE_LOCATION + "/sprint"} element={ <Sprint/> } />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
