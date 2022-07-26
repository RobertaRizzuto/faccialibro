import './index.css';

const Button = ({textContent, color, type, onBtnClick}) => {
  return (
    <button onClick={onBtnClick} type={ type } className="Button" style={{ backgroundColor: color }}>{ textContent }</button>
  )
}

export default Button;