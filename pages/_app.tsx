
import "./globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <section className="  min-h-screen bg-black">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </section>
    )
}
export default MyApp