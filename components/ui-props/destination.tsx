import Image from "next/image"
import MiniNav from "../destination-nav"
import {motion as m} from 'framer-motion'
import useStore from "@/zustand/index-store"

interface DestinationProps {
    image : string
    place : string
    description : string 
    distance : string
    timetravel: string

}

const DestinationPage : React.FC<DestinationProps> = ({
    image,
    place,
    description,
    distance,
    timetravel
}) => {

    const index = useStore((state) => state.index)

    return ( 
        <div className="bg-destination bg-cover h-[950px] bg-bluish bg-center w-full md:bg-md_destination md:h-[1024px] lg:overflow-hidden lg:bg-lg_destination lg:h-screen">
        <m.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className=" text-white pt-[6.375rem] md:px-11 md:pt-[8.5rem] lg:px-[10.375rem] 2xl:container 2xl:mx-auto">

            <h2 className="text-center md:text-start md:text-xl lg:text-[1.75rem] "><span className="font-bold text-white/50 pr-2 md:pr-[1.188rem] lg:pr-7">01</span> PICK YOUR DESTINATION</h2>
                <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:justify-between lg:items-end">
                    <Image src={image} width={455} height={455} alt="moon" className="object-contain w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] mt-8 md:mt-[3.75rem] lg:w-[25.813rem] lg:h-[25.813rem] xl:w-[27.813rem] xl:h-[27.813rem]" />
                    <div className="flex flex-col items-center lg:items-start lg:justify-center">
                        <MiniNav />
                        <h1 className="font-bellefair text-[3.5rem] pb-3 uppercase md:text-[5rem]">{place}</h1>
                        <p className=" text-[0.938rem] text-center text-cream px-6 md:px-0 md:w-[35.75rem] lg:w-[27.813rem] lg:text-start">{description}</p>
                        <hr className="px-6 w-[20.438rem] bg-white/40 my-8 md:w-[35.75rem] lg:w-[27.813rem]"/>
                        <div className="md:grid md:grid-cols-2 md:w-[35.75rem]  lg:justify-start lg:w-[27.813rem]">
                            <div className="flex flex-col items-center justify-center gap-3 pb-8 lg:items-start ">
                                <p className=" text-cream text-sm font-b_condenced">AVG. DISTANCE</p>
                                <p className=" font-bellefair text-[1.75rem] uppercase">{distance}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 pb-8 lg:items-start">
                                <p className=" text-cream text-sm font-b_condenced">EST. TRAVEL TIME</p>
                                <p className=" font-bellefair text-[1.75rem] uppercase">{timetravel} </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </m.div>
    </div>
     );
}
 
export default DestinationPage;