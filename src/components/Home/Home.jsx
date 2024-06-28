import ResultCube from '../elements/ResultCube/ResultCube';
import SearchCube from '../elements/SearchCube/SearchCube';
import './Home.css';

export default function Home() {
  return (
    <div className="home-result-container">
      <ResultCube />
      <ResultCube />
      <ResultCube />
      <ResultCube />
      <ResultCube />
      <ResultCube />
      <ResultCube />
    </div>
  );
}
