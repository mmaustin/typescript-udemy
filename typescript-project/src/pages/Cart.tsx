import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Cart = () => {
  return (
    <div className=" flex flex-col">
      <h3 className=" text-2xl ">Cart</h3>
      <Link to='/'>Home</Link>
      <div className="">
      <Button asChild size='sm' >
        <Link to='/'>Home Button</Link>
      </Button>
      </div>
    </div>
  )
};
export default Cart;