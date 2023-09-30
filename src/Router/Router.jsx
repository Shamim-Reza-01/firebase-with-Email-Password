import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";


const Router = () => {
    return (
        <div>
            <h1 className="text-5xl">it work </h1>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Router;