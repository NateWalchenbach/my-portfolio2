import "./Topbar.scss";
export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            nate.
          </a>
          <div className="itemContainer">
            <p className="icon">%ICON%</p>
            <span>(425) 422-2001</span>
          </div>
          <div className="itemContainer">
            <p className="icon">%ICON%</p>
            <span>natewalchenbach24@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}