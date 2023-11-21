import Filter from "@/components/EBooks/Filter";

const Ebooks = () => {
    return (
        <section className=' max-w-[60%] mx-auto p-3 text-white mt-10 font-bold'>
            <h2 className='text-3xl'>
                E-books
            </h2>

            {/* Ebooks Filter */}
            <Filter />

        </section>
    );
}

export default Ebooks;