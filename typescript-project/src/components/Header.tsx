/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState<{username: string} | null>({username: 'Big Dogg'})


  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header>
      <div className="flex align-element justify-end md:justify-center py-2">
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='md:text-xs text-sm md:text-blue-600'>Hello, {user.username}</p>
            <Button variant='link' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center -mr-4'>
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Sign in / Guest</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header;