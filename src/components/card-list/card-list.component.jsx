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
					<div className="social-list">
						<a href={item.facebook}>
							<img alt="Facebook" src="./img/facebook.png" className="social-icon"/>
						</a>
						<a href={item.instagram}>
							<img alt="Instagram" src="./img/instagram.png" className="social-icon"/>
						</a>
					</div>
				</div>
				)
			)}
		</div>
	);
}

export default CardList;