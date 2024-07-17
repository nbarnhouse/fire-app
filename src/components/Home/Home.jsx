import ResultCube from './home_elements/ResultCube/ResultCube';
import SearchCube from './home_elements/SearchCube/SearchCube';
import './Home.css';

export default function Home() {
  return (
    <div className="home-result-container">
      <SearchCube />
      {/* Need to add loop through database for result cubes */}
      <ResultCube />
    </div>
  );
}
