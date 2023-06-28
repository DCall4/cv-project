import React, { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            degree: '',
            date: '',
            education: [
                {
                    id: uniqid(),
                    school: 'State University',
                    degree: 'B.S. Rigorous Studies',
                    date: '1969'
                }
            ], 
            edit: false
        }
    }

    handleSchoolChange = (e) => {
        this.setState({
            school: e.target.value
        })
    }

    handleDegreeChange = (e) => {
        this.setState({
            degree: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    onSubmitEducation = (e) => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.date
            }),
            school: '',
            degree: '',
            date: ''
        })

        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleDelete = (e) => {
        const newEducation = this.state.education.filter(education => education.id !== e)

        this.setState({
            education: newEducation
        })
    }

    render() {
        const {
            school, 
            degree, 
            date,
            education, 
            edit
        } = this.state;

        return (
            <div id="Education">
                <div className="heading">Education</div>
                {education.map(edu => {
                    return (
                        <div key={edu.id}>
                            <div>
                                <div className="eduDiv">
                                    <div className="edu-school">{edu.school}</div>
                                    <button onClick={() => this.handleDelete(edu.id)}>X</button>
                                </div>
                                <div className="eduDiv">
                                    <div className="edu-degree">{edu.degree} - </div>
                                    <div className="edu-date">{edu.date}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button className="toggleEdit" onClick={this.toggleEdit}>Add</button>

                {edit && 
                    <form id="edu-add" className="editForm">
                        <label htmlFor="school">School</label>
                        <input
                            id="school"
                            type="text"
                            value={school}
                            onChange={this.handleSchoolChange}
                        />
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            type="text"
                            value={degree}
                            onChange={this.handleDegreeChange}
                        />
                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            type="text"
                            value={date}
                            onChange={this.handleDateChange}
                        />
                        <button className="editBtn" onClick={this.onSubmitEducation}>Add to Education</button>
                        <button className="editBtn" onClick={this.toggleEdit}>Close Form</button>
                    </form>
                    }
            </div>
        )
    }
}

export default Education;