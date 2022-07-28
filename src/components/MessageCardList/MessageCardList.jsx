import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import './index.css';
import Button from '../Button';

const MessageCardList = ({ isRenderedList, setRenderedList, filteredValue }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
      GET('messages').then((data) => setMessageList(data));
  }, [isRenderedList]);
  const dateSort = (a, b) => a.date < b.date ? 1 : -1;
  return (
    <div className="MessageCardList">
       <Button textContent="Update list" onBtnClick={() => setRenderedList(!isRenderedList)}/>
      
      {
        messageList.length
          ? messageList.sort((a, b) => dateSort(a,b)).filter((el)=>el.sender.toLowerCase().includes(filteredValue.toLowerCase())).map(message => <MessageCard isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;