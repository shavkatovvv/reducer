import { Form } from "./components/form";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <Form />
            <h1 className="text-4xl text-red-500">{counter}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

export default App;
