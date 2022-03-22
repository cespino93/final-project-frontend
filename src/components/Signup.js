import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    
    const handleUserInfoInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }
    const handleHometownInfoInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            hometown: {
                ...signupFormData.hometown,
                [name]: value
            }
        }
        updateSignupForm(updatedFormInfo)
    }
    
    // signup action
    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
        }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfoInputChange} />
            <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
            <input placeholder="state" value={signupFormData.hometown.state} name="state" type="text" onChange={handleHometownInfoInputChange} />
            <input placeholder="country" value={signupFormData.hometown.country} name="country" type="text" onChange={handleHometownInfoInputChange} />
            <input placeholder="city" value={signupFormData.hometown.city} name="city" type="text" onChange={handleHometownInfoInputChange} />
            <input type="submit" value="Sign Up"/>
        </form> 
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)