import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Playground from './components/Playground';
import { restart } from './redux/cardsSlice';

function App() {
  const dispatch = useDispatch();

  const move = useSelector((state) => state.cards.moveCount);
  return (
    <>
      <div id='app'>
        <Playground />

      </div>
      <div className='container'>
        <span></span>
        <span>{move}</span>
        <button onClick={() => dispatch(restart())}>Restart</button>
      </div>
    </>
  );
}

export default App;
