import React from "react"
import Image from 'react-bootstrap/Image'

const CustomerAvatar = props => {
    return (
        <Image src={props.src}  alt={props.alt} roundedCircle />
    )
}
export default CustomerAvatar