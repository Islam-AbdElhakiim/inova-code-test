import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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