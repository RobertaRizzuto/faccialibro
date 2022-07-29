import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";
import Modal from "../Modal";

const AddMessage = ({ isRenderedList, onAddButton }) => {
  const [messageText, setMessageText] = useState("");
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isLoginModalVisible, setLoginModalVisibility] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    messageText && localStorage.getItem("username")
      ? POST("messages", {
          text: messageText,
          sender: localStorage.getItem("username"),
          date: new Date().toLocaleDateString(),
        }).then(() => {
          setMessageText("");

          onAddButton(!isRenderedList);
        })
      : setModalVisibility(true);
  };

  return (
    <>
      <form className="AddMessage" onSubmit={onFormSubmit}>
        <input
          className="AddMessage__text"
          type="text"
          placeholder="Scrivi il messaggio..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required
        />
        <Button type="submit" textContent="Invia" color="#d1fb95" />
      </form>
      {isModalVisible && (
        <Modal
          mainModalText="Devi effettuare il login per postare un messaggio, vuoi procedere con il login? "
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

export default AddMessage;
