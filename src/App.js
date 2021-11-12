
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount:302.67, date: new Date(2021, 4, 28)},
    {title: 'Bike Insurance', amount:111.08, date: new Date(2021, 3, 12)},
    {title: 'Health Insurance', amount:30.61, date: new Date(2021, 4, 7)},
    {title: 'Home Insurance', amount:3024.64, date: new Date(2021, 5, 20)},
    {title: 'Travel Insurance', amount:88.91, date: new Date(2021, 1, 18)},
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Lets get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;