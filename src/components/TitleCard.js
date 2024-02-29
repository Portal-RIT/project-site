
import '../App.css';

function TitleCard ({title}) {
	const cardTitle = title;

	return (
		<div class="title-card">
			<h1>{cardTitle}</h1>
		</div>
	)
}

export default TitleCard;