import './App.css'
import Field from './components/Field'

function App() {
  return (
    <div className="App">
      <Field x={5} y={5} colors={["Red", "Green", "Blue"]}/>
    </div>
  );
}

export default App
