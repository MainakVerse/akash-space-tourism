import useStore from "@/zustand/index-store";
import classNames from "classnames";

const TechNav = () => {

    const tech = useStore(state => state.tech)

    return (
        <div className="flex gap-4 font-bellefair md:text-2xl lg:flex-col lg:gap-8">
            <div onClick={() => useStore.setState({ tech: 0 })} className={classNames("cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/50  bg-tranparent hover:bg-white hover:text-black duration-300 md:w-[3.75rem] md:h-[3.75rem] lg:w-[5rem] lg:h-[5rem]", {" bg-white border-none text-black" : tech === 0})}>1</div>
            <div onClick={() => useStore.setState({ tech: 1 })} className={classNames("cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/50  bg-tranparent hover:bg-white hover:text-black duration-300 md:w-[3.75rem] md:h-[3.75rem] lg:w-[5rem] lg:h-[5rem]", {" bg-white border-none text-black" : tech === 1})}>2</div>
            <div onClick={() => useStore.setState({ tech: 2 })} className={classNames("cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-white/50  bg-tranparent hover:bg-white hover:text-black duration-300 md:w-[3.75rem] md:h-[3.75rem] lg:w-[5rem] lg:h-[5rem]", {" bg-white border-none text-black" : tech === 2})}>3</div>
        </div>
    );
}

export default TechNav;