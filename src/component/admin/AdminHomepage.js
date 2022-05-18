import { Link } from "react-router-dom"
import AdminSignin from "./AdminSignin"
import AdminSignup from "./AdminSignup"


const AdminHomepage = () =>{

    return(
        <>
            <div>
            <Link to='/header'></Link>
            </div>
            <div className="container">
                
                <AdminSignup/>
                <AdminSignin/>
            </div>
        </>
    )
}

export default AdminHomepage