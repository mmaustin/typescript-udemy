/* eslint-disable @typescript-eslint/no-unused-vars */

import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NodeToggle from "./NodeToggle";


const Navbar = () => {
  return (
    <nav className=" bg-muted py-4">
      <div className=" align-element flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-center items-center gap-x-4">
          <NodeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}
export default Navbar;