import { Component } from 'react';

class CardList extends Component{

	render() {
		const {ecommrce,parentclass,className} = this.props;
		return (
			<div className={parentclass}>
			{ecommrce.map((eco) => (
				<div className={className}>
					<h3 key={eco.id}>{eco.name}</h3>
					<h4 key={eco.name}>{eco.email}</h4>
				</div>
				)
			)}
			</div>
		);
	}
}

export default CardList;