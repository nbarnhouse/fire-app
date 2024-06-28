import PriceRangeBox from '../PriceRangeBox/PriceRangeBox';
import LocationPin from '../LocationPin/LocationPin';

import './ResultCube.css';

export default function ResultCube() {
  return (
    <div className="result-container">
      <div className="header">
        <LocationPin />
      </div>
      <div className="footer">
        <PriceRangeBox />
      </div>
    </div>
  );
}
