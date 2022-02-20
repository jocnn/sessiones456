import logo from './logo.svg';
import './App.css';
import ClockFunctComp from './components/clockFunctComp';
//import ClockClassComp from './components/clockClassComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFunctComp></ClockFunctComp>
        {/* <ClockClassComp></ClockClassComp> */}
      </header>
    </div>
  );
}

export default App;
