import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            isTutee: 'on',
            isTutor: 'off',
            name: '',
            email: '',
            password: ''
        }
    }

    onTuteeCheckChange = (event) => {
        this.setState({isTutee: event.target.value})
        this.setState({isTutor: "off"})
    }

    onTutorCheckChange = (event) => {
        this.setState({isTutor: event.target.value})
        this.setState({isTutee: "off"})
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignUp = () => {
    }

    render() {
        return (
            <div className="signup">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr className="signup-hr"/>
                <form>
                    <div>
                        <input 
                            type="radio" 
                            name="radio-t" 
                            defaultChecked
                            onChange={this.onTuteeCheckChange}
                        />
                        <label htmlFor="Tutee"><b>Tutee</b></label>
                        <input 
                            type="radio" 
                            name="radio-t"
                            onChange={this.onTutorCheckChange}
                        />
                        <label htmlFor="Tutor"><b>Tutor</b></label>
                    </div>
                    <div className="signup-form">
                        <div className="signup-label">
                            <label htmlFor="name"><b>Name</b></label>
                        </div>
                        <input 
                            className="signup-input"
                            type="text" 
                            placeholder="Enter Name" 
                            name="name" 
                            required 
                            onChange={this.onNameChange}
                        />
                    </div>
                    <div className="signup-form">
                        <div className="signup-label">
                            <label htmlFor="email"><b>Email</b></label>
                        </div>
                        <input 
                            className="signup-input"
                            type="text" 
                            placeholder="Enter Email" 
                            name="email" 
                            required 
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="signup-form">
                        <div className="signup-label">                    
                            <label htmlFor="psw"><b>Password</b></label>
                        </div>
                        <input
                            className="signup-input"
                            type="password" 
                            placeholder="Enter Password" 
                            name="psw" 
                            required 
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button 
                            type="reset" 
                            className="signup-cancelbtn"
                        >Reset</button>
                        <button 
                            type="submit" 
                            className="signup-btn"
                            onClick={this.onSubmitSignUp}
                        >Sign Up</button>
                    </div>                    
                </form>
                    
            </div>        
        );
    }
}

export default SignUp;