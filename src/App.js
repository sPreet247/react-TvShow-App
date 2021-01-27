import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.tvmaze.com/search/shows?q=girls')
      .then((response) => setItems(response.data));
    // .then(
    //   (data) => {
    //     setIsLoaded(true);
    //     setItems(data);
    //   },
    //   (error) => {
    //     setIsLoaded(true);
    //     setError(error);
    //   }
    // );
  }, [items]);

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <SearchBox />
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <img
                  className='.image-card'
                  src={item.show.image.medium}
                  alt=''
                ></img>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
