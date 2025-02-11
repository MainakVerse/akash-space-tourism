import useStore from "@/zustand/index-store";
import classNames from "classnames";

const CrewNav = () => {

    const crew = useStore(state => state.crew)


    return (
        <div className="flex gap-4 py-8">
            <div onClick={() => useStore.setState({ crew: 0 })} className={classNames(" cursor-pointer border border-white duration-300 hover:opacity-100 w-[0.625rem] h-[0.625rem] rounded-full", {"bg-white" : crew === 0})}></div>
            <div onClick={() => useStore.setState({ crew: 1 })} className={classNames(" cursor-pointer border border-white duration-300 hover:opacity-100 w-[0.625rem] h-[0.625rem] rounded-full", {"bg-white" : crew === 1})}></div>
            <div onClick={() => useStore.setState({ crew: 2 })} className={classNames(" cursor-pointer border border-white duration-300 hover:opacity-100 w-[0.625rem] h-[0.625rem] rounded-full", {"bg-white" : crew === 2})}></div>
            <div onClick={() => useStore.setState({ crew: 3 })} className={classNames(" cursor-pointer border border-white duration-300 hover:opacity-100 w-[0.625rem] h-[0.625rem] rounded-full", {"bg-white" : crew === 3})}></div>
        </div>
    );
}

export default CrewNav;