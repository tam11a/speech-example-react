import './App.css';
import Dictaphone from './Dictaphone';
import Speak from './Speak';

function App() {

  return (
    <div className="App">
      <Dictaphone />  
      <Speak text="hello Tamim" />
    </div>
  );
}

export default App;
