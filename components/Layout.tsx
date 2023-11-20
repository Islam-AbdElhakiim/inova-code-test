import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
    return (
        <section className="">
            <Header />
            {children}
            <Footer />
        </section>
    );
}

export default Layout;