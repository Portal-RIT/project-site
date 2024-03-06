// Zoe's note: Make sure that each feature object always has a name in order for the navbar to work
// More fields will definitely need to be added to this!
export const features = [
	{
	  name: "Feature 1",
	  start: "01-01-2024",
	  end: "01-14-2024",
	  description: "This is Feature 1",
	  associated_sprints: ["Sprint 1"],
	  tasks: [["Name of Task", "Uno", "Dos", "Tres"], ["Next Name", "Cuatro", "cinque"], ["Last Task", "Sice", "Seven", "cater", "Jack"]],
	  tracking: ["Test_Chart.png", "Test_Time.png"],
	  demo: "bunny.mp4"
	},
	{
	  name: "Feature 2",
	  start: "01-14-2024",
	  end: "01-28-2024",
	  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ",
	  associated_sprints: ["Sprint 1", "Sprint 2"],
	  tasks: [["Name of Task", "Uno", "Dos", "Tres"], ["Next Name", "Cuatro", "cinque"], ["Last Task", "Sice", "Seven", "cater", "Jack"]],
	  tracking: ["Test_Chart.png", "Test_Time.png"],
	  demo: "bunny.mp4"
	},
	{
	  name: "Feature 3",
	  start: "01-28-2024",
	  end: "02-11-2024",
	  description: "This is Feature 3",
	  associated_sprints: ["Sprint 2"],
	  tasks: [["Name of Task", "Uno", "Dos", "Tres", "four", "five"], ["Next Name", "Cuatro", "cinque"], ["Last Task", "Sice", "Seven", "cater"]],
	  tracking: ["Test_Chart.png", "Test_Time.png"],
	  demo: "bunny.mp4"
	},
]