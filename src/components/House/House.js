import React from 'react'

const house = (props) => (
    <div>
        <h3>{props.name}</h3>
        <h3>{props.address}</h3>
        <h3>{props.city}</h3>
        <h3>{props.state}</h3>
        <h3>{props.zipcode}</h3>
        <button onClick={(id) => props.deleteHouse(props.id)}>delete</button>
    </div>
)

export default house
