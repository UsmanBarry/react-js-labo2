import React from "react";
import Logo1 from "./reactogo.png";
class Logo extends React.Component {
    render() {
        return (
            <div>
                Logo est chargé sous APP directement
                <div className="container">
                    <div className="row">
                        <img src={Logo1} alt="reactogo" />
                    </div>
                </div>
            </div>



        )
    }
}
export default Logo
