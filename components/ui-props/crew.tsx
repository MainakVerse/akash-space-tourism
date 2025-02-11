import Image from "next/image"
import { motion as m } from 'framer-motion'
import useStore from "@/zustand/index-store"
import CrewNav from "../crew-nav"


interface CrewPageProps {
    image: string
    title: string
    description: string
    name: string


}

const CrewPage: React.FC<CrewPageProps> = ({
    image,
    title,
    description,
    name,

}) => {

    const crew = useStore((state) => state.crew)

     
    return (
        <div className="bg-crew bg-cover h-screen bg-bluish bg-center w-full md:bg-md_crew  lg:bg-lg_crew lg:h-screen lg:overflow-hidden">
            <m.div
                key={crew}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className=" text-white pt-[6.375rem] md:px-11 md:pt-[8.5rem] lg:px-[10.3125rem] 2xl:container 2xl:mx-auto">

                <h2 className="text-center md:text-start md:px-11  md:text-xl lg:text-[1.75rem] lg:px-0"><span className="font-bold text-white/50 pr-2 md:pr-4 lg:pr-6">02</span>MEET YOUR CREW</h2>
                <div className="md:flex md:items-center md:w-full md:justify-center lg:grid lg:justify-between lg:top-0">
                    <div className="flex flex-col items-center justify-center md:relative md:flex-col-reverse lg:static lg:gap-[4.125rem] lg:flex-row-reverse lg:justify-between">
                        <Image src={image} alt="moon" width={568} height={712} className=" h-[13.875rem] w-[11.07rem] mt-8 object-contain lg:object-cover  md:w-[28.523rem] md:h-[35.75rem] md:mt-0 md:absolute md:top-[18.75rem] lg:top-0 lg:relative xl:w-[35.504rem] xl:h-[44.5rem]" />
                        <hr className=" w-[20.438rem] bg-white/50 h-[0.063rem] md:hidden" />
                        <div className="flex flex-col items-center md:flex-col-reverse md:w-[28.625rem] lg:w-full  lg:items-start lg:justify-center">
                            <CrewNav />
                            <div className="flex flex-col items-center font-bellefair lg:items-start lg:w-full">
                                <h1 className="pb-3 uppercase text-cream lg:text-[2rem]">{title}</h1>
                                <h2 className="text-2xl uppercase lg:text-[3.1rem] xl:text-[3.5rem]">{name}</h2>
                                <p className=" text-[0.938rem] py-8 text-center text-cream px-6 md:px-0 md:w-[35.75rem] lg:w-[27.75rem] lg:text-start lg:text-lg">{description}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </m.div>
        </div>
    );
}

export default CrewPage;