import { useDispatch } from 'react-redux';
import { check, handleClick, move } from '../redux/cardsSlice';

function Card({ item }) {
  const dispatch = useDispatch();

  const click = () => {
    dispatch(check());
    dispatch(move())
    dispatch(handleClick(item));
  };


  return (
    <div
      className={`card ${!item.close ? 'opened' : ''} ${item.completed ? 'matched' : ''
        }`}
      onClick={click}
    >
      <div className='front'>?</div>
      <div className='back'>
        <img
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item.name}.png`}
          alt='for'
        />
      </div>
    </div>
  );
}

export default Card;
