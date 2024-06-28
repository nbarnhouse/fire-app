import './SearchCube.css';

export default function SearchCube() {
  return (
    <div className="search cube">
      <h3 className="dark-shade">Sort By</h3>
      <h3 className="dark-shade">Area (City or Zip Code)</h3>
      <input type="text" placeholder="Seattle, WA" />
      <h3 className="dark-shade">And/Or</h3>
      <h3 className="dark-shade">Price</h3>
      <input type="text" placeholder="Min" />
      <input type="text" placeholder="Max" />
      <button>Search</button>
    </div>
  );
}
