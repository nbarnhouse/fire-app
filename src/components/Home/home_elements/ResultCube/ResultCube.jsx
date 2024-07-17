import PriceRangeBox from '../PriceRangeBox/PriceRangeBox';
import CityText from '../CityText/CityText';
import LocationPin from '../../../elements/LocationPin/LocationPin';

import './ResultCube.css';

export default function ResultCube() {
  return (
    <div className="result-container">
      <div className="header">
        <LocationPin />
      </div>
      <div className="footer">
        <CityText />
        <PriceRangeBox />
      </div>
    </div>
  );
}
