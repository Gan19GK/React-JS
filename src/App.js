import {useState,useEffect} from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {
  // Default set values
  const [searchField,setsearchField] = useState('');
  const [user_list,setuser_list] = useState([]);
  const [filteruserlist,setFilteruserlist] = useState(user_list);

  //fetch data
  useEffect(() => {
    fetch('/users')
      .then((response) => response.json())
      .then((users) => setuser_list(users)
    );
  },[]);

  useEffect(() => {
    const filtervaluestring = user_list.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteruserlist(filtervaluestring);
  },[user_list,searchField]);

  // Search field
  const OnsearchEngine = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase(); 
    setsearchField(searchFieldString);
  }

  return(
    <div className='App'>
      <header className='App-header'>
        <img alt="Logo" src="./img/logo.png" width="300"/>
        <SearchBox 
          onChangeHandler={OnsearchEngine} 
          placeholder='Search Members...'
          className='Search-box'
        />
        <CardList 
          ecommrce={filteruserlist}
          className='card-list-child'
          parentclass='card-list'
        />
      </header>
    </div>
  );
}
/*class App extends Component {
  constructor(){
    super();
    this.state={
      ecommrce: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('/users')
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
}*/

export default App;
