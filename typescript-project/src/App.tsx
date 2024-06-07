/* eslint-disable @typescript-eslint/no-unused-vars */

import {Button} from '@/components/ui/button';
import { useAppSelector } from './hooks';


const App = () => {
  const { name } = useAppSelector((state) => state.cartState);
  console.log(name);

  const flx = ():void =>{
    console.log('it works'); 
  };


  return (
    <div className="">
      <h1 className='text-7xl font-bold text-red-400'>App</h1>
      <Button variant='destructive' size='lg' onClick={flx}>Click Here</Button>
    </div>
  )
};
export default App;