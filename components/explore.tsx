import Link from "next/link";

const Explore = () => {
    return (
        <div className="relative group">
            <Link 
                href="/destination" 
                className="relative z-10 bg-gradient-to-l from-white via-blue-200 to-white bg-[length:200%_100%] bg-right-top hover:bg-left-top text-bluish text-xl h-[9.375rem] w-[9.375rem] rounded-full flex items-center justify-center md:w-[15.125rem] md:h-[15.125rem] md:text-[2rem] cursor-pointer lg:h-[15.5rem] lg:w-[15.5rem] xl:h-[17.125rem] xl:w-[17.125rem] transition-all duration-500 ease-in-out group-hover:scale-105"
            >
                EXPLORE
            </Link>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00f] blur-md" />
        </div>
    );
}

export default Explore;