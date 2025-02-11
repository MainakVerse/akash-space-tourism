"use client"

import { useEffect, useState } from 'react'

import DestinationPage from "@/components/ui-props/destination";
import DestinationData from '@/app/(routes)/destination/data.json'
import useStore from "@/zustand/index-store";




const Destination = () => {

    const data = DestinationData
    const index = useStore((state) => state.index)

    const [destination, setDestination] = useState(data[index])

    useEffect(() => {
        setDestination(data[index])
    },[index, data])


    return (
      
       <DestinationPage image={`${destination.image}`} place={destination.place} description={destination.description} distance={destination.distance} timetravel={destination.timetravel} />
       
    );
}

export default Destination;