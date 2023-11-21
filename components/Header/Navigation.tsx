import { FaChevronDown } from "react-icons/fa";
import { navigationLinks } from "../../constants";
import { useState } from "react";

const Navigation = () => {
    const [navLinks, setNavLinks] = useState(navigationLinks);
    return (
        <nav className="">
            <ul className=" flex justify-center items-center text-white gap-10 ">
                {Object.keys(navLinks).map((link: any) => (
                    <li className="flex justify-center items-center gap-2 relative" onClick={() => {
                        setNavLinks( (prev: any) => ({...prev, [link]: {...prev[link], isOpened: prev[link].hasOwnProperty("isOpened") ? !prev[link].isOpened : null}}));
                        console.log(navLinks);
                    }}>
                        {navLinks[link].title}
                        {navLinks[link].children && (
                            <span className=" text-xs"> <FaChevronDown /> </span>
                        )}
                        {navLinks[link].isOpened && (
                            <ul className="flex flex-col justify-center items-start  absolute left-0 top-10  w-[200px] gap-2">
                                {navLinks[link].children.map( (child:any) => (
                                    <li className="hover:bg-green-500 w-full transition ">{child.title}</li>
                                ))}
                            </ul>
                        )}
                    </li> 
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;