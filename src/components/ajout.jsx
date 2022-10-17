import React from "react";
class ajout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'test',
            nom: 'testnom',
            prenom: 'testprenom'

        }
    }
    render() {
        return (
            <div className="container">
                <h3>Ajouter un utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom:</label>
                        <input type="text"
                            required
                            className="form-control" value={this.state.nom} />
                        <label>Prenom:</label>
                        <input type="text"
                            required
                            className="form-control" value={this.state.prenom} />
                        <label>Code:</label>
                        <input type="text"
                            required
                            className="form-control" value={this.state.code} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Ajout" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default ajout