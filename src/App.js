import logo from './logo.svg';
import './App.css';
import SearchTool from './SearchTool';
import Store from './Store';

function App() {
  return (
    <div className="App">
      <Store>
        <SearchTool />
      </Store>
    </div>
  );
}

export default App;
