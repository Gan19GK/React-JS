import './card-list.css';
import './card-list-img.jsx';

const CardList = (props) => {
	const {ecommrce,parentclass,className} = props;
	return(
		<div className={parentclass}>
			{ecommrce.map((eco) => (
				<div className={className}>
					<img src={eco.profile} />
					<h3 key={eco.id}>{eco.name}</h3>
					<p>{eco.bio}</p>
				</div>
				)
			)}
		</div>
	);
}

export default CardList;