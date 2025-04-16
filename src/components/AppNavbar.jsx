import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>MEMES</NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/table">Table</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/list">List</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
