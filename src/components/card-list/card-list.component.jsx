import './card-list.css';

const CardList = (props) => {
	const {ecommrce,parentclass,className} = props;
	return(
		<div className={parentclass}>
			{ecommrce.map((item,index) => (
				<div className={className}>
					<img alt="Members" src={item.profile} />
					<h3 key={item.id}>{item.name}</h3>
					<p>{item.bio}</p>
				</div>
				)
			)}
		</div>
	);
}

export default CardList;