import logo from '../images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="airbnb" />
    </nav>
  );
}

export default Navbar;