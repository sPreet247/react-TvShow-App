import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.tvmaze.com/search/shows?q=girls')
      .then((response) => setItems(response.data));
  }, [items]);

  return (
    <div>
      <Navbar />
      <div>
        <SearchBox />
      </div>
      <div className='content'>
        {items &&
          items.map((item) => (
            <div key={item.id}>
              <img
                className='image-card'
                src={item.show.image.medium}
                alt=''
              ></img>
              <p>Ratings: {item.show.rating.average}/10</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
