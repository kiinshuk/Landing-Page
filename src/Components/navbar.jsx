
function Navbar() {
    return (
      <div>
        <nav className="container">
          <div
          className="logo">
            <img src="/images/brand_logo.png"></img>
          </div>
  
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
  
          <button>login</button>
        </nav>
      </div>
    )
  }
  
  export default Navbar;
  