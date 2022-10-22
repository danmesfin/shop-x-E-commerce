import { useDispatch } from 'react-redux';
import { decrement } from '../../redux/counter/counterSlice';

function Decrement() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement State</button>
    </div>
  );
}

export default Decrement;
