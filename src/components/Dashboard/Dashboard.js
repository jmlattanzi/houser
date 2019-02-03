import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getHouses, deleteHouse } from '../../redux/asyncReducer'
import House from '../House/House'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: [],
        }

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.props.getHouses()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.ar.house !== prevProps.houses) {
            this.props.getHouses()
        }
    }

    deleteHouse(id) {
        this.props.deleteHouse(id)
    }

    render() {
        return (
            <div>
                <h1>dashbaord</h1>
                <Link to='/wizard'>Add New Property</Link>
                <div>
                    {!this.props.ar.loading ? (
                        this.props.ar.houses.map((house) => (
                            <House
                                key={house.id}
                                name={house.name}
                                address={house.address}
                                city={house.city}
                                state={house.state}
                                zipcode={house.zipcode}
                                id={house.id}
                                deleteHouse={this.deleteHouse}
                            />
                        ))
                    ) : (
                        <h1>loading</h1>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(
    mapStateToProps,
    { getHouses, deleteHouse }
)(Dashboard)
