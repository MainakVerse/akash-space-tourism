"use client"

import { motion as m } from 'framer-motion'
import Image from 'next/image';

import TechNav from '@/components/tech-nav';
import useStore from '@/zustand/index-store';

interface TechnologyPageProps {
    title: string
    description: string
    image: string
}


const TechnologyPage : React.FC<TechnologyPageProps> = ({
    title,
    description,
    image
}) => {

    const tech = useStore((state) => state.tech)

    return (
        <div className="bg-tech bg-cover h-screen bg-bluish bg-center w-full md:bg-md_tech  lg:bg-lg_tech lg:h-screen lg:overflow-hidden">
            <m.div
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className=" text-white pt-[6.375rem] md:pt-[8.5rem] lg:pl-[10.3125rem] 2xl:container 2xl:mx-auto">

                <h2 className="text-center md:text-start  md:px-11 md:text-xl lg:px-0 lg:text-[1.75rem]"><span className="font-bold text-white/50 pr-2 md:pr-4 lg:pr-6">03</span>SPACE LAUNCH 101</h2>
                <div className='lg:flex lg:flex-row-reverse lg:w-full'>
                    <Image src={image} width={515} height={527} alt='spaceship' className='w-full h-[10.625rem] object-cover object-bottom my-[2.125rem] md:h-[19.375rem]  lg:h-[32.938rem] lg:w-[32.188rem]' />
                    <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:gap-20'>
                        <TechNav />
                        <div className='flex flex-col justify-center items-center gap-4 w-[20.438rem] py-[1.625rem] md:w-[28.625rem] lg:items-start'>
                            <h1 className='uppercase text-cream text-sm md:text-base '>The Terminalogy..</h1>
                            <h2 className='uppercase font-barlow md:text-[2.5rem]'>{title}</h2>
                            <p className='text-cream text-center lg:text-start'>{description}</p>
                        </div>
                    </div>
                </div>
            </m.div>
        </div>
    );
}

export default TechnologyPage;