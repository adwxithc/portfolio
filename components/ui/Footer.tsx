import React from 'react'
import MagicButton from './MagicButton'
import { Send } from 'lucide-react'
import { socialMedia } from '@/data'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='w-full pt-20 pb-10 mb-[100px] md:mb-5' id="contact">
      
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> outside digital presence to the next level
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me to day and lets discuse how i can help you achive your goal</p>
            <a href="mailto:adwaithjanrdhanan0@gmail.com">
                <MagicButton
                title="Get in touch"
                icon={<Send size={18} />}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024</p>
            <div className=' flex items-center md:gap-3 gap-6'>
                {
                    socialMedia.map(({id,img})=>(
                        <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <Image src={img} alt={img} width={20} height={20} />
                        </div>

                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer
