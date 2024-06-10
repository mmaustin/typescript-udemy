import { Header } from "@/components";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        Navbar
      </nav>
      <Outlet />
    </>
  )
}
export default HomeLayout;