import LogoCube from '../LogoCube/LogoCube.jsx';
import SitebarTitle from '../SidebarTitle/SidebarTitle.jsx';
import './AboutSideBar.css';

export default function LogoSideBar() {
  return (
    <>
      <SitebarTitle />
      <div className="about-sidebar-container">
        <div className="title-container">
          <SitebarTitle />
        </div>

        <div className="logo-container">
          <LogoCube />
        </div>

        <div className="community-container">
          Online Community
          <div className="image-container">
            <div className="img-background">
              <img id="red-img" src="/src/assets/redface.png" alt="Red Face" />
            </div>
            <div className="img-background">
              <img
                id="blue-img"
                src="/src/assets/bluemask.png"
                alt="Blue Mask"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
