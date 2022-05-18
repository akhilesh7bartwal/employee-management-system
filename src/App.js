import { Route, Routes } from "react-router-dom";
import AddEmployee from "./component/admin/AddEmployee";
import AdminDashboard from "./component/admin/AdminDashboard";
import AdminHomepage from "./component/admin/AdminHomepage";
import EditEmployee from "./component/admin/EditEmployee";

import DisplayEmployees from "./component/displayEmployee/DisplayEmployees.component";
import Header from "./component/header/Header";
import Signin from "./component/signin/Signin";
import Signup from "./component/signup/Signup";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path='/header' element={<Header/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/employee/display" element={<DisplayEmployees/>}></Route>
          <Route path="/admin" element={<AdminHomepage/>}></Route>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
          <Route path="/admin/addemployee" element={<AddEmployee/>}> </Route>
          <Route path="/admin/edit/:id" element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
