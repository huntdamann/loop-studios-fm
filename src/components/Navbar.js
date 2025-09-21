import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useMediaQuery from './hooks/useMediaQuery.js';

import { createTheme } from '@mui/material/styles';
import Menu from './Menu';
import './Navbar.css';
import {RemoveScroll} from 'react-remove-scroll';




const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Navbar() {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width:460px)');

  const menuRef = React.useRef(null);
  const [opacity, setOpacity] = React.useState('')


  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if(isMenuOpen === true) {
    }else {
      setOpacity('0')
    }
  }

  return (
   <>


    <nav className='absolute z-[47] text-white bg-transparent items-center w-full flex justify-between md:p-8 p-6'>
      
        <span className='z-[48] text-3xl md:mt-[-2rem] font-bold'>loopstudios</span>
       
        <ul style={{opacity: isMenuOpen? '1': '0', zIndex: isMenuOpen? '47' : '0'}} id="menu" className='menu-container'>
          <RemoveScroll enabled={isMenuOpen? true: false}>
            <ExitToAppIcon style={{opacity: isMenuOpen? '1': '0'}} className='absolute top-8 right-6' />
            
            <div className='absolute flex flex-col cursor-pointer font-[100] uppercase gap-5 text-3xl top-[12rem]'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
            </div>
            </RemoveScroll>
           
        </ul>
        <ul className="hidden md:flex">
        <div className='absolute flex font-[100] cursor-pointer uppercase gap-5 text-1xl top-[1rem]'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
            </div>
        </ul>
       
        <MenuIcon style={{opacity: isMenuOpen? '0': '1'}} className='z-[48] md:border md:invisible' onClick={showMenu} />
       
    </nav>
   </> 
  
  )
}

