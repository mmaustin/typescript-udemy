import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Cart = () => {
  return (
    <div className=" w-24 flex flex-col">
      <h3 className=" text-2xl ">Cart</h3>
      <Link to='/'>Home</Link>
      <Button asChild size='default' >
        <Link to='/'>Home Button</Link>
      </Button>
    </div>
  )
};
export default Cart;