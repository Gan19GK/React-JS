import {Component} from 'react';

import logo from './ecommerce.png';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      ecommrce: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return {ecommrce: users};
        }
      )
    );
  }
  OnsearchEngine = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();     
    this.setState(() => {
      return { searchField };
    });
  }
  render(){
    const {ecommrce,searchField} = this.state;
    const {OnsearchEngine} = this;
    const filtervalue = ecommrce.filter((eco) => {
      return eco.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title-home">GK tech Members</h1>
          <SearchBox 
            onChangeHandler={OnsearchEngine} 
            placeholder='Search Members...'
            className='Search-box'
          />
          <CardList 
            ecommrce={filtervalue}
            className='card-list-child'
            parentclass='card-list'
          />
        </header>
      </div>
    );    
  }
}

export default App;
