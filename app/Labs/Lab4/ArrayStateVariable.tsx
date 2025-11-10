/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
export default function ArrayStateVariable() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button variant="success" onClick={addElement} className="mb-2">
        Add Element
      </Button>
      <ListGroup>
        {array.map((item, index) => (
          <ListGroupItem key={index}>
            {item}
            <Button
              variant="danger"
              onClick={() => deleteElement(index)}
              className="float-end"
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      <hr />
    </div>
  );
}
