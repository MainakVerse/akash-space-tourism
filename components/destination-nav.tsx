// "use client"

import classNames from 'classnames'

import useStore from '@/zustand/index-store'
// import { useEffect, useState } from 'react'

const MiniNav = () => {

    const index = useStore(state => state.index)

    


    return (
        <div className="w-full">
          <ul
            className="flex items-center justify-center w-full py-6 gap-6 md:py-12 lg:justify-start"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <li
              onClick={() => useStore.setState({ index: 0 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 0 },
                "w-full custom-width"
              )}
            >
              MOON
            </li>
            <li
              onClick={() => useStore.setState({ index: 1 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 1 },
                "w-full custom-width"
              )}
            >
              MARS
            </li>
            <li
              onClick={() => useStore.setState({ index: 2 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 2 },
                "w-full custom-width"
              )}
            >
              EUROPA
            </li>
            <li
              onClick={() => useStore.setState({ index: 3 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 3 },
                "w-full custom-width"
              )}
            >
              TITAN
            </li>
            <li
              onClick={() => useStore.setState({ index: 4 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 4 },
                "w-full custom-width"
              )}
            >
              GLIESE
            </li>
            <li
              onClick={() => useStore.setState({ index: 5 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 5 },
                "w-full custom-width"
              )}
            >
              KEPLER 22
            </li>
            <li
              onClick={() => useStore.setState({ index: 6 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 6 },
                "w-full custom-width"
              )}
            >
              KEPLER 69
            </li>
            <li
              onClick={() => useStore.setState({ index: 7 })}
              className={classNames(
                "py-2 text-cream cursor-pointer",
                { "border-b-[3px] text-white border-white ": index === 7 },
                "w-full custom-width"
              )}
            >
              KEPLER 62
            </li>
          </ul>
        </div>
      );
      
}

export default MiniNav;