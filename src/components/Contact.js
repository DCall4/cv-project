import React, { Component } from "react";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            phone: '',
            email: '',
            website: '',
            title: '',
            edit: false
        };
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleWebsiteChange = (e) => {
        this.setState({
            website: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    togglePrintable = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.toggle('printable')
        })
    }

    render() {
        const { name, phone, email, website, title, edit } = this.state;

        return (
            <div id="Contact">
                <div className="name rightSide">{name ? name : 'Your Name'}</div>
                <div className="email leftSide">{email ? email: 'Your Email Address'}</div>
                <div className="phone leftSide">{phone ? phone: 'Your Phone Number'}</div>
                <div className="website leftSide">{website ? website: 'Your Website'}</div>
                <div className="title rightSide">{title ? title: 'Your Title'}</div>
                <button className='toggleEdit contactBtn' onClick={this.toggleEdit}>Edit</button>
                <button className='togglePrint' onClick={this.togglePrintable}>Print?</button>

                {edit && 
                    <form id="contactEdit" className="editForm">
                        <label htmlFor="name">Your Name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={this.handleNameChange}
                        />
                        <label htmlFor="email">Your Email Address</label>
                        <input 
                            id="email"
                            type="email"
                            onChange={this.handleEmailChange}
                        />
                        <label htmlFor="phone">Your Phone Number</label>
                        <input 
                            id="phone"
                            type="tel"
                            onChange={this.handlePhoneChange}
                        />
                        <label htmlFor="website">Your Website</label>
                        <input 
                            id="website"
                            type="text"
                            onChange={this.handleWebsiteChange}
                        />
                        <label htmlFor="title">Your Title</label>
                        <input 
                            id="title"
                            type="text"
                            onChange={this.handleTitleChange}
                        />
                        <button className="editBtn" onClick={this.toggleEdit}>Close Form</button>
                    </form>
                }
            </div>
        )
    }
}

export default Contact;