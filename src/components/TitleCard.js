
import '../App.css';

function TitleCard ({title, subtitle}) {
	const cardTitle = title;
	const subTitle = subtitle;

	return (
		<div class="title-card">
			<h1>{cardTitle}</h1>
			<h3>{subTitle}</h3>
		</div>
	)
}

export default TitleCard;