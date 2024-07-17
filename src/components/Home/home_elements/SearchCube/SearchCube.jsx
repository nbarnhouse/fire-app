import './SearchCube.css';

export default function SearchCube() {
  return (
    <div className="search-container-background">
      <div style={{ margin: 'auto', height: '25%' }} className="center">
        <p className="search-label dark-shade center">Sort By</p>
      </div>

      <div className="search-details-container">
        <p id="area" className=" label-header-format dark-shade">
          Area
          <span
            style={{
              fontSize: '12.857px',
              // // display: 'flex',
              // // alignItems: 'flex-end',
              // // marginBottom: '5px',
            }}
          >
            {' '}
            (City or Zip Code)
          </span>
        </p>

        <div className="center">
          <input
            type="text"
            className="input-format-search"
            placeholder="Seattle, WA"
          />
        </div>
        <div className="center">
          <p id="and-label-format" className="dark-shade center">
            And/Or
          </p>
        </div>
        <p input id="price" className="label-header-format dark-shade">
          Price
        </p>
        <div className="range-input-container center">
          <input type="text" className="input-format-range" placeholder="Min" />
          <input type="text" className="input-format-range" placeholder="Max" />
        </div>
      </div>

      <div style={{ margin: 'auto', height: '25%' }} className="center">
        <button className="search-button center">Search</button>
      </div>
    </div>
  );
}
