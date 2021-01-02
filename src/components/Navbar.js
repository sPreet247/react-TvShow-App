import SearchBox from './SearchBox';

export default function Navbar() {
  return (
    <nav>
      <div>
        <a href='/'>SHow Search</a>
        <a href='/'>Popular Shows</a>
        <a href='/'>Favorites</a>
        <SearchBox />
      </div>
    </nav>
  );
}
