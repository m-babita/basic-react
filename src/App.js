import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
          <h2>REACT ESSENTIALS</h2>
          <h1>USERS DATA</h1>
          <First name="Babita" age="19"/>

          {/* <First name="Stotious" age="20"/> */}
    </div>
  );
}

export default App;
