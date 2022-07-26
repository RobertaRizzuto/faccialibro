import { useState } from 'react';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import './App.css';


function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [filteredValue, setFilteredValue] = useState('');

  return (
    <div className="App">
      <div className="App__friends">
        <h3>Lista degli amici</h3>
        <FriendCardList setFilteredValue={setFilteredValue}/>
      </div>
      <div className="App_messages">
        <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
        <input onChange={(event) => setFilteredValue(event.target.value)} className="search_input" type="text" placeholder="Search..." />
        <MessageCardList filteredValue={ filteredValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
      </div>
      
    </div>
  );
}

export default App;