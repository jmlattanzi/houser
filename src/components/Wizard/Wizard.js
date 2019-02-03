import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { addHouse } from '../../redux/asyncReducer'
import WizardOne from './WizardOne'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addHouse(this.state)
        this.props.location.pathname = '/'
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>wizard</h1>
                <Link to='/'>cancel</Link>
                <Link to={`${this.props.match.url}/next`}>next</Link>
                <div>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>Name: </label>
                        <input
                            type='text'
                            name='name'
                            placeholder='name'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <label>Address: </label>
                        <input
                            type='text'
                            name='address'
                            placeholder='address'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <label>City: </label>
                        <input
                            type='text'
                            name='city'
                            placeholder='city'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <label>State: </label>
                        <input
                            type='text'
                            name='state'
                            placeholder='state'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <label>Zipcode: </label>
                        <input
                            type='text'
                            name='zipcode'
                            placeholder='zipcode'
                            onChange={(e) => this.handleChange(e)}
                        />
                        <input type='submit' />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(
    mapStateToProps,
    { addHouse }
)(Wizard)
