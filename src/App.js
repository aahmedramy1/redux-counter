import logo from './logo.svg';
import './App.css';
import { useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import { decrement, increment} from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
  return (
    <div >
        <button onClick={() => { dispatch(decrement())}}>DECREMENT</button>
            <header >Counter: {counter}</header>
        <button onClick={() => {dispatch(increment())}}>INCREMENT</button>
    </div>
  );
}

export default App;
