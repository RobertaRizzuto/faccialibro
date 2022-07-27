import { useState } from 'react';
import { POST } from '../../utils/api.js';

import Button from '../Button';
import './index.css';

const AddFriend = ({ isRenderedList, onAddButton }) => {
  const [friendName, setFriendName] = useState('');
  const [photo, setPhoto] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendName && photo) {
      POST('friends', {
        name: friendName,
        photo: photo,
        
      })
      .then(() => {
        setFriendName('');
        setPhoto('');
        onAddButton(!isRenderedList);
      })
    }
  }


  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="Aggiungi il nome utente"
        value={ friendName }
        onChange={(e) => setFriendName(e.target.value)}
        required
      />
      <input
        className="AddFriend__photo"
        type="text"
        placeholder="Aggiungi la foto profilo"
        value={ photo }
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <Button type="submit" textContent='Aggiungi' color='lightseagreen' />
    </form>
  )
}

export default AddFriend;