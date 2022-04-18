
import './search-box.css';

const SearchBox = (props) => {
	const {placeholder,onChangeHandler,className} = props;
	return(
		<div className={className}>
			<input type="search" placeholder={placeholder} 
	  		onChange={onChangeHandler} />
	  	</div>
	);
}

export default SearchBox;