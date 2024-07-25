import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Details = () => {

    const params = useParams();
    const location = useLocation();
    console.log('params', params);
    console.log('location', location);

    return (
        <div>Details</div>
    )
}

export default Details