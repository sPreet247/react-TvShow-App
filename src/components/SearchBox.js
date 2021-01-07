import axios from 'axios';
function SearchBox() {
  const url = `http://api.tvmaze.com/singlesearch/shows?q=girls`;
  async function getData() {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className='searchBox'>
        <input type='search' placeholder='Search for Shows...'>
          {getData}
        </input>
      </div>
    </>
  );
}
export default SearchBox;
