import React, { Component } from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'HTML'
                },
                {
                    id: uniqid(),
                    skill: 'CSS'
                },
                {
                    id: uniqid(),
                    skill: 'JavaScript'
                },
                {
                    id: uniqid(),
                    skill: 'React'
                },
                {
                    id: uniqid(),
                    skill: 'Back End'
                },
                {
                    id: uniqid(),
                    skill: 'Front End'
                },
            ],
            edit: false
        }
    }

    handleSkillChange = (e) => {
        this.setState({
            skill: e.target.value
        })
    }

    onSubmitSkill = (e) => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: ''
        })
        this.toggleEdit()
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleDelete = (e) => {
        const newSkills = this.state.skills.filter(skill => skill.id !== e)

        this.setState({
            skills: newSkills
        })
    }

    render() {
        const {
            skill, 
            skills,
            edit
        } = this.state;

        return (
            <div id="Skills">
                <div className="heading">Skills</div>
                <ul className="skillList">
                    {skills.map(skill => {
                        return (
                            <li key={skill.id}>
                                <div className="listDiv skillDiv">
                                    <div>{skill.skill}</div>
                                    <button onClick={() => this.handleDelete(skill.id)}>X</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button className="toggleEdit" onClick={this.toggleEdit}>Add</button>
                {edit &&
                    <form id="skill-add" className="editForm">
                        <label htmlFor="skill">Skill</label>
                        <input 
                            id="skill"
                            type="text"
                            value={skill}
                            onChange={this.handleSkillChange}
                        />
                        <button className="editBtn" onClick={this.onSubmitSkill}>Add Skill</button>
                        <button className="editBtn" onClick={this.toggleEdit}>Close</button>
                    </form>
                    }
            </div>
        )
    }
}

export default Skills;