import { DELETE } from '../../utils/api';
import './index.css';
import Modal from '../Modal';
import { useState } from 'react';

const MessageCard = ({textContent, isRenderedList, onDeleteBtn}) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  
 

  return (
    <div className="MessageCard">
      <button onClick={()=> setModalVisibility(true)} className="MessageCard__delete">X</button>
      <p className="MessageCard__text">
        { textContent.text }
      </p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">
          { textContent.sender }
        </p>
        <p className="MessageCard__info--date">
          { textContent.date }
        </p>
      </div>
      { isModalVisible &&
        <Modal onCancelBtnClick={()=> setModalVisibility(false)} onOkBtnClick={() =>  
          DELETE('messages', textContent.id)
            .then(() => onDeleteBtn(!isRenderedList))
      } mainModalText='sei sicuro di voler eliminare il messaggio?'/>
      }
      </div>
  )
}

export default MessageCard;