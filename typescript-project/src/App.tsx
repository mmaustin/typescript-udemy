import {Button} from '@/components/ui/button'

const App = () => {

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