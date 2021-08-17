import { Link } from "react-router-dom"

const PageNotFound = () =>{
    return(
        <>
           <h1> Oops Page not found </h1>
           <Link to={'/'} style={{textDecoration:'none'}}> Go back to home page</Link>
        </>
    )
};
export default PageNotFound;