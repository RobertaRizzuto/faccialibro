import { useState } from "react";
import { POST } from "../../utils/api.js";
import Modal from "../Modal";
import Button from "../Button";
import "./index.css";

const AddFriend = ({ isRenderedList, onAddButton }) => {
  const [friendName, setFriendName] = useState("");
  const [photo, setPhoto] = useState("");
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isLoginModalVisible, setLoginModalVisibility] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    friendName && photo && localStorage.getItem("username")
      ? POST("friends", {
          name: friendName,
          photo: photo,
        }).then(() => {
          setFriendName("");
          setPhoto("");
          onAddButton(!isRenderedList);
        })
      : setModalVisibility(true);
  };

  return (
    <>
      <form className="AddFriend" onSubmit={onFormSubmit}>
        <input
          className="AddFriend__name"
          type="text"
          placeholder="Aggiungi il nome utente"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          required
        />
        <input
          className="AddFriend__photo"
          type="text"
          placeholder="Aggiungi la foto profilo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <Button type="submit" textContent="Aggiungi" color="#d1fb95" />
      </form>
      {isModalVisible && (
        <Modal
          mainModalText="Devi effettuare il login per aggiungere un amico, vuoi procedere con il login? "
          onCancelBtnClick={() => setModalVisibility(false)}
          onOkBtnClick={() => {
            setLoginModalVisibility(true);
            setModalVisibility(false);
          }}
        />
      )}
      {isLoginModalVisible && (
        <Modal
          type="login"
          setModalVisibility={() => {
            setLoginModalVisibility(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
};

export default AddFriend;
