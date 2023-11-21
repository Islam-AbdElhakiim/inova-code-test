import Link from "next/link";

const TopBar = () => {
    return (  
        <div className=" w-full bg-black text-white  border p-3 border-transparent border-b-bgGray">
            <div className="max-w-[60%] mx-auto flex justify-end items-center ">
                <Link href={"#"}>العربية</Link>
            </div>

        </div>
     );
}
 
export default TopBar;