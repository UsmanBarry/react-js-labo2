import React from "react";
//external librairy
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='navbar-brand'>
                    <Link to="/logo" className="nav-link"> Bienvenue </Link></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/list" className="nav-link">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ajout" className="nav-link">Ajout</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ajout2" className="nav-link">Ajout2</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Navbar