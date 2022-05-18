import Header from "../header/Header"
import AdminSignin from "./AdminSignin"
import AdminSignup from "./AdminSignup"


const AdminHomepage = () =>{

    return(
        <>
            <div>
                <Header/>
            </div>
            <div className="container">               
                <AdminSignup/>
                <AdminSignin/>
            </div>
        </>
    )
}

export default AdminHomepage