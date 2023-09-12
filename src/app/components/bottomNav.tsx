'use client'

import Link from 'next/link'
import Mlink from '@mui/material/Link'
import Image from 'next/image'
import {HiMenuAlt3} from 'react-icons/hi'
import  Paper  from '@mui/material/Paper'
import  BottomNavigation  from '@mui/material/BottomNavigation'
import  BottomNavigationAction  from '@mui/material/BottomNavigationAction'
import { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ArchiveIcon from '@mui/icons-material/Archive';


export default function BottomNav() {
  const [value, setValue] = useState(0);
    // let [view, setView] = useState(false)

    // function openView() {
    //     setView(true)
    // }

    // function closeView() {
    //     setView(false)
    // }
    return (
      // <div>
        
      // </div>
        <header className='sm:hidden'>
        <div>
                
                {/* <div className='w-full bg-white fixed bottom-0  mb-3 sm:hidden '>
                 <ul className='flex flex-row gap-3 justify-center'>
                    <Link href='/' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>Home</li>
                    </Link>
                    <Link href='/store' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>Ga'de</li>
                    </Link>
                    <Link href='/administrasi' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>administrasi</li>
                    </Link>
                 </ul>
            
                </div> */}

                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

            {/* <Link href='/' passHref> */}
                <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
         
            {/* </Link> */}
            {/* <Link href="/store" passHref> */}
                <BottomNavigationAction href="/store" label="Ga'de" icon={<StorefrontIcon />} />            
            {/* </Link> */}
            {/* <Link href="/administrasi" passHref> */}
                <BottomNavigationAction href="/administrasi" label="Administrasi" icon={<ArticleIcon />} />            
            {/* </Link> */}

         

        </BottomNavigation>
      </Paper>

                 
                
              </div>
              
              
      </header>
    )
}