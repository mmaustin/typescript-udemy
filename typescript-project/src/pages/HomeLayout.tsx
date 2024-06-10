import { Header } from "@/components";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        Navbar
      </nav>
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  )
}
export default HomeLayout;