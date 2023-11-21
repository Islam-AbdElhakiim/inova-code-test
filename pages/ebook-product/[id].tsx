import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import dynamic from 'next/dynamic'

export const getServerSideProps = async (context: any) => {
    // const id = context.params.id;
    // const response = await fetch(`http://3.65.32.166/api/v2/storefront/products/${id}`);
    // const user = await response.json();
    return {
        props: {}
    }
}

const EbookProduct = () => {
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<any>(false);

    const { id } = useRouter().query;
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const pageRef = useRef<any>();

    const fetchProduct = async () => {
        setLoading(true);
        console.log("fetching", id)
        const response = await fetch(`http://3.65.32.166/api/v2/storefront/products/${id}`);
        const user = await response.json();
        setUser(user);
        console.log(user)
        return setLoading(false)
    };

    useEffect(() => {

        fetchProduct();
        console.log(pageRef);


    }, [])


    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <section className="flex flex-col justify-center items-start max-w-[60%] mx-auto mt-16">
            {loading ? 'loading' : (
                <>
                    <div className="text-white flex gap-5 items-center justify-center">
                        <Link href={"/"} className=" text-green-500">
                            <FaChevronLeft />
                        </Link>
                        <h2 className="font-bold text-3xl italic">{user?.data?.attributes?.name && user.data.attributes.name}</h2>
                    </div><div className="flex justify-center items-center w-full gap-5">
                        {/* left */}
                        <div className=" w-2/6 flex flex-col justify-start items-start bg-[#272727] min-h-20">

                            {/* Pages BTN wrapper */}
                            <div className=" cursor-pointer group flex justify-between items-center w-full px-5 text-white p-10">
                                <h2 className="font-bold text-2xl">Pages</h2>
                                <span className=" text-green-500 transition">
                                    <FaChevronRight />
                                </span>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col items-start justify-center h-[80vh] w-[50vw] bg-[#272727]">
                            <Document file="/ramy.pdf" onLoadSuccess={onDocumentLoadSuccess} className={" border border-pink-500 flex justify-center items-center  w-[40vw] overflow-auto m-0 p-0 mt-12 h-[100%] "}>

                                <Page pageNumber={1} className={"w-[25vw] h-full"} renderTextLayer={false} renderAnnotationLayer={false} />
                                <Page pageNumber={2} className={"w-[25vw] h-full"} canvasRef={(ref: any) => {
                                    pageRef.current = ref;
                                }} renderTextLayer={false} renderAnnotationLayer={false} />
                                {/* <Page pageNumber={2} /> */}
                            </Document>
                            <p className="text-center text-2xl text-white">
                                Page {pageNumber} of {numPages}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default EbookProduct;