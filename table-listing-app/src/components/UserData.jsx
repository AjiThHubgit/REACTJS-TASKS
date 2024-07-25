import React, { useEffect, useState } from 'react'
import DataTable from './DataTable';
import { getValueFromLocalStorage, removeValueFromLocalStorage, getDatesInRange } from '../utils/service'

const UserData = ({ filteredList, filterClicked }) => {
    console.log('Rendering UserData Component');
    const [date, setDate] = useState({});
    const [getDatesInRanges, setGetDatesInRanges] = useState([]);

    useEffect(() => {
        console.log('Inside filterClicked useEffect');
        const getDateRage = getValueFromLocalStorage("filter_date") || '';
        if (getDateRage) {
            const parsedDate = JSON.parse(getDateRage);
            setDate(parsedDate);
            removeValueFromLocalStorage("filter_date");
        }

        if (date && date.start_date && date.end_date) {
            setGetDatesInRanges(getDatesInRange(date.start_date, date.end_date));
        }

    }, [filterClicked, date]);

    // useEffect(() => {
    //     console.log('Inside date useEffect');
    //     if (date && date.start_date && date.end_date) {
    //         setGetDatesInRanges(getDatesInRange(date.start_date, date.end_date));
    //     }
    // }, [date]);

    return (
        <section>
            {
                getDatesInRanges.length > 0 ? <DataTable filteredList={filteredList} getDatesInRanges={getDatesInRanges}/> : <h2>No data Found</h2>
            }
        </section>
    )
}

export default UserData