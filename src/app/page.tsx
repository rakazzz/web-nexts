'use server'
import MobileNav from './components/navBar'
import Image from 'next/image'
import SlideContent from './components/homeContent'
import Maps from './components/mapsDesa'
import { revalidatePath } from 'next/cache'

// export const revalidate = 10

export default async function Home() {

  // async function dataProd() {
  //   const content = await prisma.post.findMany({
  //     take:6,
  //     where: {published: true},
  // })
  // }
  revalidatePath("/")

  
  return (
    <main className="">

      <MobileNav/>
      
      <div className='bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-t-3xl'>
        <div className='justify-center rounded-lg'>
          <div className='sm:flex sm:flex-row sm:max-w-full lg:justify-center overflow-hidden'>
              <Image 
                className='-mx-16 float-left lg:float-none'
                src="/Sekcamnobg.png" 
                width={280}
                height={400}
              
                alt="Sekretaris Camat" />
            <div className='sm:flex sm:flex-col sm:px-5 mt-6'>
              <p className='pt-4 pr-4 text-white text-md lg:text-lg text-right font-light'>Selamat Datang di</p>            
              <p className='pt-2 pr-5 text-white sm:text-3xl lg:text-4xl text-right font-extrabold'>Website Desa Tamannyeleng</p>            
              <p className='pt-14 pr-4 text-white text-xl text-right font-medium italic'>
                "Kami Pemuda,</p>
                <p className='-mt-1 pr-4 text-white text-xl text-right font-medium italic'>
                Kami Penggerak."</p>
                <p className='pt-4 pr-4 text-white text-sm text-right font-medium'>
                - Abdul Latif Has,</p>
                <p className='-mt-1 pr-4 text-white text-sm text-right font-medium'>
                PLT Kepala Desa Tamannyeleng</p>            
            </div>
          </div>
        </div>           
        <div className='bg-white p-4 max-w-6xl mx-auto flex items-center flex-col'>
          <div className='relative'>
            <img
            className='w-100 h-100 mx-auto saturate-50'
            alt='foto kantor'
            src='/kantordesa.jpg'
            />
            <p className='absolute text-white bottom-0 right-0 text-5xl lg:text-8xl font-extrabold text-center'>Profil Desa</p>
          </div>
          <p className='p-6'>Desa ini awalnya salah satu dusun di Desa Bontoala, Kecamatan Pallangga, Kabupaten Gowa. Kemudian dipisah menjadi desa tersendiri bernama Desa Persiapan Tamannyeleng, yang pada saat itu menjadi Kepala Desa Pertama adalah <span className='font-extrabold text-yellow-400'>Yasin Alauddin Karaeng Ngaseng</span>. Setelah resmi menjadi Desa Tamannyeleng, diadakan pemilihan kepala desa, dan terpilih H. S. Mukhtar Tuppu yang menjabat selama 7 tahun.</p>
          <div className=''>
            <ul className='font-bold text-4xl text-center list-none'>Daftar Dusun
                <li className='mt-4 text-base text-center font-normal text-lg text-left'>Ta'malalang Timur</li>
                <li className='text-base text-center font-normal text-lg text-left'>Ta'malalang Barat</li>
                <li className='text-base text-center font-normal text-lg text-left'>Mannyioi</li>
                <li className='text-base text-center font-normal text-lg text-left'>Tabbinjai</li>
            </ul>
          </div>
        </div>
        <div className='bg-sky-700 mt-3'>
          <p className=' text-2xl text-white text-center mx-5 pt-3 font-bold'>Produk Ga'de</p>
          
          <SlideContent />

          <Maps></Maps>
        </div>
      </div> 
      {/* <BottomNav></BottomNav>     */}
    </main>
  )
}
