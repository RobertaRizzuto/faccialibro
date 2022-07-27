import './index.css';

const FriendCard = ({ friendData, setFilteredValue, onImgClick }) => {
  const { photo, name } = friendData;

  return (
    <div  className="FriendCard">
      <img onClick={onImgClick} className="FriendCard__photo" src={ photo } alt={ name } />
      <p onClick={()=>setFilteredValue(name)} className="FriendCard__name">{name}</p>
    </div>
  )
}

export default FriendCard;