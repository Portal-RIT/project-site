import './App.css';
import NavBar from './components/NavBar';


// Zoe's note: Make sure that each feature object always has a name in order for the navbar to work
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
  
// Zoe's note: Each sprint object in this array must have a name field to be used in the navbar
  const sprints = [
	{
	  name: "Sprint 1",
	  start: "01-01-2024",
	  end: "01-14-2024"
	}
]
function App() {
  return (
    <div className="App" style={{height: "100%"}}>
      <NavBar
        features={features}
        sprints={sprints}
      ></NavBar>

    </div>
  );
}

export default App;
