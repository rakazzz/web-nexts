
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import BottomNav from './components/bottomNav'
import Intro from "next/font/local"

const poppins = Poppins({ subsets: ['latin'], weight: "500" })
const intro = Intro({
  src: [
    {
      path: '../../public/fonts/Intro-Trial-Bk.woff2',
      weight: '600'
    }
  ],
  variable: "--judul"
})

export const metadata: Metadata = {
  title: 'SIPAKAMASETA',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </head>
      <body className={poppins.className} >{children} 
      
      <footer className='bg-gray-500 pb-16 sm:pb-0 sm:py-4 static mx-auto w-screen'>
        <div className='flex flex-col sm:flex-row items-center justify-between sm:mx-auto sm:max-w-6xl'>
          <div className=' text-white mt-3 items-center text-center sm:text-left'>
            <Image 
            className='mx-auto'
            src="/SIPAKAMASETA.png" 
            width={200}
            height={120}
            alt="" />
          </div>  
          <div>

          </div>
          <div className='text-white text-center sm:text-right'>
            <p  className='text-2xl font-semibold'>Desa Tamannyeleng</p>
            <p  className='font-medium text-md'>Kec. Barombong, Kab. Gowa, Sulawesi Selatan</p>
              <ul className='mt-4 text-white text-center sm:text-right'>
                <li className='my-3'><Link href='#'>Home </Link></li>
                <li className='my-3'><Link href='/store'>Ga'de </Link></li>
                <li className='my-3'><Link href='/administrasi'>Administrasi </Link></li>
              </ul>              
            <div className='flex gap-4'>
              <button>
                <a className="flex items-center text-xs gap-2" href="https://www.instagram.com/ppkormawa_himastatunhas">
                  <FaInstagram className='h-5 w-5'/>@ppkormawa_himastatunhas
                </a>
              </button>
              |
              <button>
                <a className="flex items-center text-xs gap-2" href="https://wa.me/+6282271626686?text=Halo.%20Saya%20ingin%20bertanya%20mengenai%20Website%20SIPAKAMASETA.">
                  <FaWhatsapp className='h-5 w-5'/>Tim Sipakamaseta
                </a>
              </button>
            </div>  
          </div>
        </div>
      </footer>
      <BottomNav></BottomNav>    
{/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      
      </body>

    </html>
  )
}
