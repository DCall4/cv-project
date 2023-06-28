import React, { Component } from "react";
import uniqid from 'uniqid';

class JobDescription extends Component {
    constructor() {
        super();

        this.state = {
            Desc: '',
            Descs: [
                {
                    id: uniqid(),
                    Desc: 'Handled Incoming Queries'
                },
                {
                    id: uniqid(),
                    Desc: 'Put out Fires'
                },
            ],
            edit: false
        }
    }

    handleDescChange = (e) => {
        this.setState({
            Desc: e.target.value
        })
    }

    onSubmitDesc = (e) => {
        e.preventDefault();
        this.setState({
            Descs: this.state.Descs.concat({
                id: uniqid(),
                Desc: this.state.Desc
            }),
            Desc: ''
        })
        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleDelete = (e) => {
        const newDescs = this.state.Descs.filter(Desc => Desc.id !== e)

        this.setState({
            Descs: newDescs
        })
    }

    render() {
        const {
            Desc, 
            Descs,
            edit
        } = this.state;

        return (
            <div id="JobDescription">
                <ul className="descList">
                    {Descs.map(Desc => {
                        return (
                            <li key={Desc.id}>
                                <div className="listDiv">
                                    <div>{Desc.Desc}</div>
                                    <button onClick={() => this.handleDelete(Desc.id)}>X</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button className="toggleEdit" onClick={this.toggleEdit}>Add Description</button>
                {edit &&
                    <form id="Desc-add" className="editForm">
                        <label htmlFor="Desc">Desc</label>
                        <input 
                            id="Desc"
                            type="text"
                            value={Desc}
                            onChange={this.handleDescChange}
                        />
                        <button className="editBtn" onClick={this.onSubmitDesc}>Add Description</button>
                        <button className="editBtn" onClick={this.toggleEdit}>Close</button>
                    </form>
                    }
            </div>
        )
    }
}

export default JobDescription;