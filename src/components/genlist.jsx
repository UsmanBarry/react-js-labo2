import React from "react";
class GenList extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.utilisateurs.code}</td>
                <td>{this.props.utilisateurs.nom}</td>
                <td>{this.props.utilisateurs.prenom}</td>
            </tr>
        )

    }
}
export default GenList;