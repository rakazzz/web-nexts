'use server'
import {FaHome, FaPlus, FaWhatsapp} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import {prisma}  from '../../../route'
import { revalidatePath } from 'next/cache'
  



export default async function Page() {

        const post = await prisma.post.findMany({
            where: { published: true},
        })
        revalidatePath('/store')

    

    return (
        <div className="min-h-screen">
            {/* navbar & search box */}
            <div className="flex flex-row m-3 items-center gap-3 justify-between">
                <input className="bg-gray-100 rounded-md w-2/3 sm:w-1/3 sm:mx-auto hidden" type="text" placeholder='Cari Barang' />
                <Link href="/store/addItem" passHref>
                    <FaPlus className='w-6 h-6'></FaPlus>
                </Link>
                <p className='text-2xl font-semibold'>Ga'de</p>
                <Link  href="/" passHref>
                    <FaHome className='w-6 h-6'></FaHome>
                </Link>
            </div>
            {/* Item List */}
            <div className='flex flex-row flex-wrap justify-center gap-4 max-w-full py-4'>
            {post.map((item)=>
                <div className='basis-2/5 sm:basis-1/6 shadow-xl rounded-xl bg-slate-200'>
                    <div className='flex flex-col h-full relative'>
                        <img className='rounded-t-xl object-cover w-full h-32 sm:max-h-44' src={item.content} alt="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
                        <p className='text-black flex-1 p-2 font-semibold'>{item.title}</p>
                        <p className='text-black p-2 '>Rp.{item.price}</p>
                        <div className='rounded-b-lg text-right'>
                            <Link className="flex items-center justify-end gap-2 p-2" href={item.kontak} target='_blank' passHref>
                                <button className='bg-green-500 p-2 rounded-full'>
                                    <FaWhatsapp className='w-7 h-7 mx-auto my-auto text-black  '/>
                                </button>
                                {/* <p className='text-2xl text-black'>Beli</p> */}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            </div>                

        </div>
    )
}
