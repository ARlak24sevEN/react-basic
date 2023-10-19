import Logo from "../image/logo.png";
import "./Header.css";
function Header() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Logo" />
      <a href="/">หน้าแรก</a>
    </nav>
  );
}
export default Header;

//export default function Header(){}

// const Header=()=>{} export default Header
