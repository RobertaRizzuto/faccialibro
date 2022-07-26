import Button from '../Button';
import './index.css';

const Modal = ({mainModalText, onCancelBtnClick, onOkBtnClick}) => {
  return  (
    <div className="Modal__overlay">
        <div className="Modal">
        <h2 className="Modal__header">{mainModalText}</h2>
        <Button color='grey' onBtnClick={()=> onCancelBtnClick(false)} textContent='cancel' className="Modal__btn_cancel"/>
        <Button color='green' onBtnClick={onOkBtnClick}  textContent='ok' className="Modal__btn_ok"/>
      </div>
    </div>
  )
}



export default Modal;