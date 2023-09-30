import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";


const Router = () => {
    return (
        <div>
            
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Router;