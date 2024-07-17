import './LogoCube.css';

export default function LogoCube() {
  return (
    <div className="logo-cube-container">
      <div className="logo-text">
        Financial
        <br />
        Independence
        <br />
        Retire
        <br />
        Early
      </div>
      <div className="logo-background">
        <img id="logo" src="/src/assets/firelogo.png" alt="fire-logo" />
      </div>
    </div>
  );
}
