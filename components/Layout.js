import Head from "next/head";
import { Box } from '@chakra-ui/react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <div>
                    <Navbar></Navbar>
                </div>
            </header>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </Box>
    </>
);

export default Layout;