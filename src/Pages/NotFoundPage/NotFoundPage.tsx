import React from "react";
import HomeButton from "../../Components/HomeButton/HomeButton"
import NotFound from "../../Components/NotFound/NotFound";

const NotFoundPage: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <NotFound />
                <HomeButton />
            </div>
        </div>
    );
}
 
export default NotFoundPage;