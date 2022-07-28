import Button from '../Button';
import './index.css';
import {useState}  from 'react'

const Modal = ({mainModalText, onCancelBtnClick, onOkBtnClick, type, setModalVisibility}) => {
  const [usernameInput, setUsernameInput] = useState('');
  if (type === 'login') {
  
    const onGetUsername = (event) => {
      event.preventDefault();
      localStorage.setItem('username', usernameInput);
      setModalVisibility()
    }
  
    return (
      <div className="Modal__overlay">
        <form className="Modal" onSubmit={onGetUsername}>
          <h2>Come ti chiami?</h2>
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="Splashscreen__form--input"
            type="text"
            placeholder="Nome ..."
            required
          />
          <Button type="submit" color="lightseagreen" textContent="Continua"/>
        </form>
      </div>
    )
  }
  
  else {
    
    return  (
    
    <div className="Modal__overlay">
        <div className="Modal">
        <h2 className="Modal__header">{mainModalText}</h2>
        <Button color='grey' onBtnClick={()=> onCancelBtnClick(false)} textContent='cancel' className="Modal__btn_cancel"/>
        <Button color='green' onBtnClick={onOkBtnClick}  textContent='ok' className="Modal__btn_ok"/>
      </div>
    </div>
  )}
}



export default Modal;