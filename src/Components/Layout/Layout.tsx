import Header  from "../Header/Header";
import Footer from "../Footer/Footer";
import { FC } from "react";

const Layout:FC = ({children})  =>{
    return(
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
};
export default Layout;
