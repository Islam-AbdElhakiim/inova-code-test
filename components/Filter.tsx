import Image from "next/image";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";


const Filter = () => {
    const [books, setBooks] = useState<any>();
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
            <div className="filters filter-button-group">
                <ul><h4>
                    <li className="bg-green-500 active" data-filter="*">All</li>
                    <li data-filter=".webdesign">Flexibility trainaing</li>
                    <li data-filter=".webdev">Weight Training</li>
                    <li data-filter=".brand">Cardio Training</li>
                    <li data-filter=".brand">Fitness</li>
                    <li data-filter=".brand">Online</li>
                </h4></ul>
            </div>

            <div className="content grid">

                {books && books.data.map((book: any) => (
                    <BookCard book={book}/>
                ))}

            </div>
        </section>
    );
}

export default Filter;