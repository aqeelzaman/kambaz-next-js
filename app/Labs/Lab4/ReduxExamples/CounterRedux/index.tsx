import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import { RootState } from "../../store";
import { Button } from "react-bootstrap";
export default function CounterRedux() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <Button className="me-2"
        variant="success"
        onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"
      >
        Increment
      </Button>
      <Button
        variant="danger"
        onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"
      >
        Decrement
      </Button>
      <hr />
    </div>
  );
}
