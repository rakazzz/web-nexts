import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import InputItem from "./inputItem";


export default function Page(){

    async function addData(dataX : FormData) {
        
        'use server'
        const name = await prisma.suketlokasitanah.create({
            data: {
                namepemilik: dataX.get('namepemilik') as string,
                alamattanah: dataX.get('alamattanah') as string,
                luastanah: dataX.get('luastanah') as string,
                luasbangunan : dataX.get('luasbangunan') as string,
                dusun:  dataX.get('dusun') as string,
                nosertiftanah: dataX.get('nosertiftanah') as string
            }
        })
        
        // console.log(dataX)

    }
    return (


    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Keterangan Lokasi Tanah</h1>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <InputItem></InputItem>
      </form> 
    </div>
  
)}