import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";


const Login = () => {
    return ( 
        <div className="flex justify-between items-center text-white gap-3">
            <div className="img-wrapper w-[40px] h-[40px] rounded-[50%] bg-lightGray  relative">
                <Image src={"/avatar.png"} alt="profile picture" fill className="rounded-[50%]" />
            </div>
            <div className="name">
                <h2>Hello</h2>
                <h2>Testy</h2>
            </div>
            <div className="btn">
            <FaChevronDown />

            </div>
        </div>
     );
}
 
export default Login;