import logo from './logo.svg';
import './App.css';
import ProgressBar from "./Components/progress-bar/ProgressBar"



function App() {
  return (
    <div className="App">
      <ProgressBar 
        percentage = "90"
      />
    </div>
  );
}

export default App;
