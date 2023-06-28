import React, { Component } from "react";
import uniqid from 'uniqid';
import JobDescription from "./JobDescription";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            company: '',
            title: '',
            start: '',
            end: '',
            location: '',
            experience: [
                {
                    id: uniqid(),
                    company: 'Acme Industries',
                    title: 'Sr Executive',
                    date: 'Jan 1970 - July 2023',
                    location: 'Springfield, MI',
                }
            ],
            edit: false
        };
    }

    handleCompanyChange = (e) => {
        this.setState({
            company: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleStartChange = (e) => {
        this.setState({
            start: e.target.value
        })
    }

    handleEndChange = (e) => {
        this.setState({
            end: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    onSubmitExperience = (e) => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                title: this.state.title,
                date: this.state.start + ' - ' + this.state.end,
                location: this.state.location
            }),
            company: '',
            title: '',
            start: '',
            end: '',
            location: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleDelete = (e) => {
        const newExperience = this.state.experience.filter(exp => exp.id !== e)

        this.setState({
            experience: newExperience
        })
    }

    render() {
        const {
            company, 
            title,
            start,
            end, 
            location,
            experience,
            edit
        } = this.state;

        return (
            <div id="Experience">
                <div className="heading">Experience</div>
                {experience.map(exp => {
                    return (
                        <div key={exp.id}>
                            <div className="expDiv">
                                <div className="expTitleDiv">
                                    <div className="expTitle">{exp.title} - </div> 
                                    <div className="exp-date"> {exp.date}</div>
                                    <button onClick={() => this.handleDelete(exp.id)}>X</button>
                                </div>
                                <div className="companyDiv">
                                    <div className="company">{exp.company} - </div>
                                    <div className="location"> {exp.location}</div>
                                </div>
                                <JobDescription />
                            </div>
                        </div>
                    )
                })}
                <button className="toggleEdit" onClick={this.toggleEdit}>Add Experience</button>

                {edit &&
                    <form id="exp-add" className="editForm">
                        <label htmlFor="company">Company</label>
                        <input 
                            id="company" 
                            type="text" 
                            value={company} 
                            onChange={this.handleCompanyChange}
                        />
                        <label htmlFor="title">Title</label>
                        <input 
                            id="title" 
                            type="text" 
                            value={title} 
                            onChange={this.handleTitleChange}
                        />
                        <label htmlFor="start">Start Date</label>
                        <input 
                            id="start" 
                            type="text" 
                            value={start} 
                            onChange={this.handleStartChange}
                        />
                        <label htmlFor="end">End Date</label>
                        <input 
                            id="end" 
                            type="text" 
                            value={end} 
                            onChange={this.handleEndChange}
                        />
                        <label htmlFor="location">Location</label>
                        <input 
                            id="location" 
                            type="text" 
                            value={location} 
                            onChange={this.handleLocationChange}
                        />
                        <button className="editBtn" onClick={this.onSubmitExperience}>Add Experience</button>
                        <button className="editBtn" onClick={this.toggleEdit}>Close Form</button>
                    </form>
                    }
            </div>
        )
    }
}

export default Experience;