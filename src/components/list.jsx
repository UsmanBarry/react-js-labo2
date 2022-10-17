import React from "react";
//import GenList from "./genlist";
let utils = [{ code: 'GreMa', nom: 'Grenier', prenom: 'Marc' },
{ code: 'RoyPa', nom: 'Roy', prenom: 'Patrick' },];
class Liste extends React.Component {
    userList() {

    }
    render() {
        return (
            <div className='container'>
                <h3>Liste des utilisateurs</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Liste
