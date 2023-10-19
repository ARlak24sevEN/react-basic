import Logo from "./image/logo.png";
function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <a href="/">หน้าแรก</a>
    </nav>
  );
}
export default Header;

//export default function Header(){}

// const Header=()=>{} export default Header
