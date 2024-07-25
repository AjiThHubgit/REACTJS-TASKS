import React, { memo } from 'react'

const Title = ({ title }) => {
    console.log('Rendering Title Component');
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default React.memo(Title)