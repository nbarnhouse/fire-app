import './SidebarTitle.css';

export default function SitebarTitle() {
  return (
    <>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 17.6272C0 7.89195 7.89195 0 17.6272 0H219.19C263.633 0 299.662 36.0285 299.662 80.4718V84.3038C299.662 94.039 291.77 101.931 282.034 101.931H17.6271C7.89193 101.931 0 94.039 0 84.3038V17.6272Z"
            fill="#1E2D1E"
          />
        </svg>
      </div>
      <div className="title-overlay-text">
        <span style={{ fontSize: '36.414px', fontWeight: '700' }}>
          F.I.R.E.
        </span>
        <br />
        <span style={{ fontSize: '29.853px', fontWeight: '400' }}>
          What does it mean?
        </span>
      </div>
    </>
  );
}
