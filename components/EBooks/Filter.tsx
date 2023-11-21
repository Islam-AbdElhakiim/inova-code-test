import Image from "next/image";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { categories } from "@/constants";


const Filter = () => {
    const [books, setBooks] = useState<any>();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const fetchingBooks = async () => {
        const result = await fetch("http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book")
        const data = await result.json();
        if (data) setBooks(data);
    }
    useEffect(() => {
        fetchingBooks();
    }, [])
    return (
        <section>
            <div className="filters filter-button-group my-5">
                <ul>
                    {categories.map((cat: string, index: number) => (
                        <li onClick={() => {
                            setFilteredBooks(books.data.filter((book: any) => book.attributes.num_of_reviews == index));
                            setSelectedCategory(index);
                        }}>
                            <h2 className={`inline p-5 rounded-md transition ${index == selectedCategory && 'bg-green-500'}`}>{categories[index]}</h2>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="content grid">
                {/* I've used reviews just for simulation ^_^ */}
                {filteredBooks.length > 0 ? filteredBooks.map((book: any) => (
                    <BookCard book={book} />
                )) : (
                    <div className="flex flex-col justify-center items-center w-full p-10">
                        <Image src={"/havana.svg"} alt="Imagine a sun and a beach!" width={100} height={100} />
                        <h2>No E-books are available</h2>
                        <p>Browse our ebook and discover what we have to you</p>
                    </div>
                )}
            </div>
        </section >
    );
}

export default Filter;