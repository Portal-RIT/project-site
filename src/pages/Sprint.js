
import { useLocation } from "react-router-dom";
import '../App.css';
import TitleCard from "../components/TitleCard";


function Sprint() {

	const location = useLocation();
	const { sprint } = location.state;

	return (
		<div className="main-content">
			<TitleCard title={sprint.name}></TitleCard>
		</div>
	)
}

export default Sprint;