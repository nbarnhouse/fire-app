import ResultCube from '../elements/ResultCube/ResultCube';
import SearchCube from '../elements/SearchCube/SearchCube';
import './Home.css';

export default function Home() {
  return (
    <div className="result-container">
      Home Page
      <ResultCube />
      Hi
      <ResultCube />
    </div>
  );
}
