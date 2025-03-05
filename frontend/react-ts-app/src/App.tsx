import './App.css';
import { useReducer } from 'react';

interface State {
  count: number;
  step: number;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'CHANGE_STEP'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'CHANGE_STEP':
      return { ...state, step: action.payload };
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Unexpected action type: ${exhaustiveCheck}`);
    };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
      <div>
        <label htmlFor="step">Step: {state.step}</label>
      </div>
      <div>
        <input
          id="step"
          type="range"
          min="1"
          max="10"
          value={state.step}
          onChange={(e) => dispatch({ type: 'CHANGE_STEP', payload: Number(e.target.value) })}
        />
      </div>
    </>
  );
};

export default App;
