import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Logobar from './components/Logobar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logobar />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
