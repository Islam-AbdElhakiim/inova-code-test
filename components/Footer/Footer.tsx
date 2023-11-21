import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Logo from "../Header/Logo";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
    const icons = [
        <FaTwitter />,
        <FaLinkedinIn />,
        <FaInstagram />


    ]
    return (
        <footer className="flex flex-col items-center justify-center w-full  py-5 text-white mt-16">
            <div className="flex justify-center items-center w-[60%] mx-auto  border-b py-5">
                <div className=" flex-1 ">

                    <Logo />
                </div>
                <div className=" text-center text-white flex-1">
                    <h2>Join our</h2>
                    <h3>Newspaper</h3>
                </div>

                <div className="flex flex-1 ">
                    <input type="search" name="search" className=" px-2 w-[80%] bg-transparent border border-gray-500  py-2 " placeholder="What are you looking for?" />
                    <button className="p-3 bg-green-500 hover:bg-black py-2 px-4 transition">Subscribe</button>
                </div>
            </div>

            <div className="flex justify-center items-center w-[60%] mx-auto ">

                <div className="flex flex-col justify-center items-start w-1/3">
                    <p className=" text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, deleniti asperiores quis libero quasi ex, necessitatibus cumque temporibus illo laboriosam odit cupiditate, provident voluptate deserunt! Qui at porro enim exercitationem.</p>
                    <p>Folow us on </p>
                    <div className="flex justify-center items-center gap-3">
                        {icons.map((icon) => (
                            <div className="w-[40px] h-[40px] rounded-[50%] bg-green-500 flex items-center justify-center p-5 transition hover:bg-white">
                                <span>{icon}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <ul className="w-1/3">
                    {footerLinks.filter((link:string, index:number) => index < 5).map((link: string) => (

                        <li className="text-white">
                            <Link href="#">
                                <p>{link}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="w-1/3 ">
                    {footerLinks.filter((link:string, index:number) => index >= 5).map((link: string) => (

                        <li className="text-white">
                            <Link href="#">
                                <p>{link}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;