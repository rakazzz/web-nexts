import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi';

const surat = [
    {name: 'Surat Pengantar dari Kantor Desa', to:'/administrasi/form/spDariDesa'},
    {name: 'Surat Izin Membangun Sementara', to:'/administrasi/form/imbS'},
    {name: 'Surat Keterangan Wali Orang Tua', to:'/administrasi/form/suketWaliOrtu'},
    {name: 'Surat Keterangan Telah Menikah', to:'/administrasi/form/suketTelahMenikah'},
    {name: 'Surat Keterangan Pengurusan Kartu Keluarga', to:'/administrasi/form/suketuruskk'},
    {name: 'Surat Keterangan Domisili', to:'/administrasi/form/suketdomisili'},
    {name: 'Surat Keterangan Belum Terbit E-KTP', to:'/administrasi/form/suketblmktp'},
    {name: 'Surat Keterangan Jabatan', to:'/administrasi/form/suketjabatan'},
    {name: 'Surat Keterangan Belum Memiliki Rumah', to:'/administrasi/form/suketbelumpunyarumah'},
    {name: 'Surat Keterangan Lokasi Tanah', to:'/administrasi/form/suketlokasitanah'},
    {name: 'Surat Lainnya', to:'/administrasi/customsurat'},
]
export default function ListSurat() {

    return(
        <div className='bg-sky-700 rounded-3xl h-screen sm:rounded-none p-3 overflow-y-auto'>
        {surat.map((item)=>
        <Link href={item.to} passHref>
            <div className='items-center justify-center flex flex-row shadow-xl transition ease-in-out bg-yellow-400 max-w-sm p-4 mx-3 m-2 pt-3 rounded-md hover:scale-90'>
                <h1 className='text-white flex-1'>
                   {item.name} 
                </h1>
                
                    <HiArrowSmRight className='h-6 w-6 text-white hover:text-gray-300' />
                
            </div>
        </Link>
        )}
        </div>
    )
}