import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
