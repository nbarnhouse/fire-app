import './About.css';
import AboutSideBar from './about_elements/AboutSidebar/AboutSideBar.jsx';
import InDepthText from './about_elements/InDepthText/InDepthText.jsx';
import OverviewText from './about_elements/OverviewText/OverviewText.jsx';

export default function About() {
  return (
    <>
      <img
        className="image-back-ground-format"
        src="/src/assets/TestAboutImage.jpg"
        alt="fire-logo"
      />

      <div className="page-title dark-shade">
        <h3>About F.I.R.E</h3>
        <h4>Financial Independence Retire Early</h4>
      </div>

      <div className="about-text-container">
        <div className="about-row-format">
          <div className="overview-text">
            <h2>Overview</h2>
            <OverviewText />
          </div>
          <div className="overview-image">
            <img src="/src/assets/AboutFirePair.png" alt="TestOverviewImage" />
          </div>
          <div className="about-sidebar">
            <AboutSideBar />
          </div>
        </div>
        <h2>In Depth</h2>
        <InDepthText />
      </div>
    </>
  );
}
