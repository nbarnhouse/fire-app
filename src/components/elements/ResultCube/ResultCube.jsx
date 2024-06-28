import ResultCubeHeader from '../ResultCubeHeader/ResultCubeHeader';
import ResultCubeFooter from '../ResultCubeFooter/ResultCubeFooter';
import './ResultCube.css';

export default function ResultCube() {
  return (
    <div className="result-container">
      <ResultCubeHeader />
      <ResultCubeFooter />
    </div>
  );
}
