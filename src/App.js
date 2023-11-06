import logo from './logo.svg';
import './App.css';

function App() { //jsx
  return (
    <div className="App">
      <SampleComponent title="My name is Amar" home="& I'm 21 years old"/>
    </div>
  );
}

const SampleComponent = (props) => {
  return (
    <div>
      <h1>{props.title} {props.home}</h1>
    </div>
  );
}
export default App;
