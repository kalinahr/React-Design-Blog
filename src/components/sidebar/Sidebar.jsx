import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
         src="https://www.analyticsinsight.net/wp-content/uploads/2021/11/Top-women-programmers.jpg"
            alt=""
          />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarTitle">Life</li>
        <li className="sidebarTitle">Music</li>
        <li className="sidebarTitle">Style</li>
        <li className="sidebarTitle">Sport</li>
        <li className="sidebarTitle">Tech</li>
        <li className="sidebarTitle">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
        );
}
        