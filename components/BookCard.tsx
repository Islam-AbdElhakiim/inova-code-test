import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";


const BookCard = ({ book }: any) => {
    return (
        <section className=" w-[180px] h-[400px] border flex flex-col items-start p-2 justify-between bg-[#272727]">
            <div className=" relative w-full h-[60%]">
                <Image src={book.attributes.book.image_url ? `/${book.attributes.book.image_url}` : '/avatar.png'} alt="book image" fill />
            </div>
            {book.attributes.name}
            <div className="flex justify-center items-center">
                {[1, 2, 3, 4, 5].map(() => (
                    <span className="text-white" ><CiStar /></span>
                ))}
            </div>
            <div className="flex gap-5">
                <b> {book.attributes.currency}</b>
                <b>{book.attributes.price}</b>
            </div>
            <div className="flex justify-between items-center w-full gap-2">
                <Link href={`/ebook-product/${book.attributes.book.id}`} className="bg-green-500 py-3 w-3/4">
                    Show Details
                </Link>
                <Link href={`/product-overview/${book.attributes.book.id}`} className="bg-green-500 w-1/4 py-3 flex justify-center items-center bg-transparent border border-green-500">
                    <AiOutlineExclamationCircle />
                </Link >
            </div>
        </section>
    );
}

export default BookCard;