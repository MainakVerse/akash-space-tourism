"use client"

import { useEffect, useState } from 'react'

import TechData from './data.json'
import useStore from '@/zustand/index-store';


import { ContactSection } from '@/components/booking';



const Technology = () => {

    const data = TechData
    const tech = useStore((state) => state.tech)

    const [ship, setShip] = useState(data[tech])

    useEffect(() => {
        setShip(data[tech])
    }, [tech, data])

    return (
        <>
            <ContactSection />
        </>
    );
}

export default Technology;