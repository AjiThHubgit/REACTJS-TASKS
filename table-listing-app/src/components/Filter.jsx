import React, { useState, useCallback, useContext } from 'react';
import { UserContext } from '../components/Table';
import { setValueToLocalStorage } from '../utils/service';

const Filter = ({ setFilteredList, setFilterClicked }) => {
    console.log('Rendering Filter Component');
    const [date, setDate] = useState({ start_date: '', end_date: '' });
    const usersData = useContext(UserContext);

    const handleOnChange = useCallback((e) => {
        const { name, value } = e.target;
        setDate(prevDate => ({ ...prevDate, [name]: value }));
    }, []);

    const isEmpty = !date.start_date || !date.end_date;

    const handleOnFilter = () => {
        setFilterClicked(prev => !prev);
        setValueToLocalStorage('filter_date', date);
        const START_DATE = new Date(date.start_date);
        const END_DATE = new Date(date.end_date);
        const userList = usersData.filter((data) => {
            const itemDate = new Date(data.date);
            return itemDate >= START_DATE && itemDate <= END_DATE;
        });
        setFilteredList(userList);
        setDate({ start_date: '', end_date: '' }); // Reset date state
    };

    return (
        <section>
            {['start_date', 'end_date'].map((field, ind) => (
                <div key={ind}>
                    <label htmlFor={field}>{field.replace("_", ' ').toUpperCase()}</label>
                    <input type="date" name={field} value={date[field]} onChange={handleOnChange} />
                </div>
            ))}
            <div>
                <button disabled={isEmpty} onClick={handleOnFilter}>Filter</button>
            </div>
        </section>
    );
};

export default Filter;
