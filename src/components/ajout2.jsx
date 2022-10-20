import React from "react";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            local: ' ',
            batisse: ' ',


        }

        this.onChangeLocal = this.onChangeLocal.bind(this);
        this.onChangeBatisse = this.onChangeBatisse.bind(this);


    }
    onChangeLocal(e) {
        this.setState({
            Local: e.target.value
        })
    }
    onChangeBatisse(e) {
        this.setState({
            Batisse: e.target.value
        })
    }


    render() {
        return (
            <div className="container">
                <h3>Liste et recuperation</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
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
export default Navbar