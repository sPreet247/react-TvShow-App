function SearchBox() {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className='searchBox'>
      <input type='search' placeholder='Search for Shows...'></input>
      <button onClick={(e) => handleClick(e.target)}>Search</button>
    </div>
  );
}
export default SearchBox;
