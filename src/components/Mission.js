import React, { Component } from "react";

class Mission extends Component {
    constructor() {
        super();

        this.state = {
            mission: '',
            edit: false
        };
    }

    handleMissionChange = (e) => {
        this.setState({
            mission: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        const { mission, edit } = this.state;

        return (
            <div id="Mission">
                <div className="heading">Career Objective</div>
                <div className="mission">
                    {mission ? mission: 'What are your Career Goals?'}
                </div>
                <button className='toggleEdit' onClick={this.toggleEdit}>Edit</button>

                {edit && 
                    <form id="MissionEdit" className="editForm">
                        <label htmlFor="mission">Career Objective</label>
                        <textarea 
                            id="mission"
                            onChange={this.handleMissionChange}
                        />
                        <button className="editBtn" onClick={this.toggleEdit}>Close Form</button>
                    </form>
                }
            </div>
        )
    }
}

export default Mission;