import React, { useState, useEffect } from 'react'
import { reJson } from '../utils/common'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    console.log('reJson', reJson);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(reJson)
    }, [])

    const handleOnClick = (id) => {
        console.log('getId', id);
        navigate(`/details/${id}`)
    }

    return (
        <>
            {data.length > 0 ? data.map((list) => (
                <div style={{ border: '1px solid gray', margin: '15px', padding: '10px', cursor: 'pointer' }} key={list.id} onClick={() => handleOnClick(list.id)}>
                    <p>{list.id}</p>
                    <p>{list.name}</p>
                    <p>{list.summary}</p>
                </div>
            )) : <p> No Data Found!</p>}
        </>
    )
}

export default Home