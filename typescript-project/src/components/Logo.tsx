import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to='/' className="hidden md:flex text-red-400mjustify-center items-center bg-primary p-2 rounded-lg md:text-blue-500">
      <Armchair className=" w-8 h-8"/>
    </Link>
  )
};
export default Logo;