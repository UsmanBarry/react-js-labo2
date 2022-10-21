import React from "react";
let deps = [{ dep: 'Gestion de réseaux', superviseur: 'Marc Grenier', code: '420.ab' },
{ dep: 'Programmation web', superviseur: 'Patrick roy', code: '420.ac' },
{ dep: 'ajoutSup', superviseur: 'test', code: '420.test' },];
class Modification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            local: ' ',
            batisse: ' ',
            dep: '',
            deps: [],

        }

        this.onChangeLocal = this.onChangeLocal.bind(this);
        this.onChangeBatisse = this.onChangeBatisse.bind(this);
        this.onChangeDep = this.onChangeDep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }
    onChangeLocal(e) {
        this.setState({
            local: e.target.value
        })
    }
    onChangeBatisse(e) {
        this.setState({
            batisse: e.target.value
        })
    }
    onChangeDep(e) {
        this.setState({
            dep: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const deps = {
            local: this.state.local,
            babel: this.state.batisse,
            dep: this.state.dep
        }
        console.log(deps);
    }
    componentDidMount() {

        this.setState({
            deps: deps.map(dep => dep.dep),
            dep: deps[0].dep,
        })

        const test = { deps: deps.map(les3champs => les3champs.dep) }
        console.log(test);
        const test2 = { dep: deps[0].dep }
        console.log(test2);
    }


    render() {
        return (
            <div className="container">
                <h3>Liste et recuperation</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Departements:</label>
                        <select
                            required
                            className="form-control"
                            onChange={this.onChangeDep}>
                            {
                                this.state.deps.map(function (dep) {
                                    return <option
                                        key={dep}
                                        value={dep}>{dep}
                                    </option>;
                                })
                            }

                        </select>
                    </div>
                    <div>

                        <label>Local:</label>
                        <input type="text"
                            required
                            className="form-control" value={this.state.local} onChange={this.onChange} />
                        <label>Batisse:</label>
                        <input type="text"
                            required
                            className="form-control" value={this.state.batisse} onChange={this.onChange} />

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Ok" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Modification










