import { useState } from "react";
import AddMessage from "./components/AddMessage";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddFriend from "./components/AddFriend";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [filteredValue, setFilteredValue] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="main_content">
        <div className="App__friends">
          <h2 className="header">Lista degli amici</h2>
           <AddFriend
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          /><p>
            Clicca sul nome dell'amico per visualizzare i messaggi da esso
            inviati
          </p>
          <p>
            
            Clicca sull'immagine del profilo di un amico per eliminarlo dalla
            lista degli amici.
          </p>
          <FriendCardList
            setFilteredValue={setFilteredValue}
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
          />
         
        </div>
        <div className="App_gallery">
        <h2 className="header">Gallery</h2>
          <Gallery />
        </div>
        <div className="App_messages">
        <h2 className="header">Bacheca </h2>
          <AddMessage
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <input
            onChange={(event) => setFilteredValue(event.target.value)}
            className="search_input"
            type="text"
            placeholder="Search..."
          />
          <MessageCardList
            filteredValue={filteredValue}
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
