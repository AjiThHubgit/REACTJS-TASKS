import React, { useEffect, useState } from 'react';

const getUniqueUserIds = (list) => {
    return list.reduce((acc, next) => {
        if (!acc.includes(next.user_id)) {
            acc.push(next.user_id);
        }
        return acc;
    }, []);
};

const getAmountForUserAndDate = (list, userId, date) => {
    const entry = list.find(item => item.user_id === userId && item.date === date);
    return entry ? entry.amount : '0.00';
};

const getTotalPaidAmountForUserId = (list, userId) => {
    let total = 0;
    list.map((item) => {
        if (item.user_id === userId) {
            total += item.amount;
        }
    });

    return total;
}

const getTotalAmountBasedOnDate = (date, filteredList) => {
    let total = 0;
    filteredList.map((item) => {
        if (item.date === date) {
            total += item.amount
        }
    });

    return total;
}

const getRowTotal = (list) => {
    const userIdArr = getUniqueUserIds(list);
    let total = 0;
    userIdArr.map((user_id) => {
        total += getTotalPaidAmountForUserId(list, user_id);
    });

    return total;
}

const getcolumnTotal = (list, getDatesInRanges) => {
    let total = 0;
    getDatesInRanges.map((date) => {
        total += getTotalAmountBasedOnDate(date, list);
    });

    return total
}

const getTotalAmountBasedRowAndColumn = (list, getDatesInRanges) => {
    const rowTotal = getRowTotal(list);
    const columnTotal = getcolumnTotal(list, getDatesInRanges);

    if (rowTotal === columnTotal) {
        return rowTotal;
    }

    return 'Error';
}

const DataTable = ({ filteredList, getDatesInRanges }) => {
    const [uniqueUserIdsList, setUniqueUserIdsList] = useState([]);

    useEffect(() => {
        setUniqueUserIdsList(getUniqueUserIds(filteredList));
    }, [filteredList]);


    const generateTableHeaders = () => {
        return (
            <tr>
                <th>User Id</th>
                {getDatesInRanges.map((date, index) => (
                    <th key={index}>{date}</th>
                ))}
                <th>Total</th>
            </tr>
        );
    };

    const generateTableRows = () => {
        return uniqueUserIdsList.map((userId, index) => (
            <tr key={index}>
                <td>{userId}</td>
                {getDatesInRanges.map((date, dateIndex) => (
                    <td key={dateIndex}> {getAmountForUserAndDate(filteredList, userId, date)}</td>
                ))}
                <td>{getTotalPaidAmountForUserId(filteredList, userId)}</td>
            </tr>
        ));
    };

    const generateTableFooter = () => {
        return (
            <tr>
                <td>TOTAL</td>
                {getDatesInRanges.map((date, index) => (
                    <td key={index}>{getTotalAmountBasedOnDate(date, filteredList)}</td>
                ))}
                <td>{getTotalAmountBasedRowAndColumn(filteredList, getDatesInRanges)}</td>
            </tr>
        );
    }

    return (
        <div>
            <table>
                <thead>{generateTableHeaders()}</thead>
                <tbody>{generateTableRows()}</tbody>
                <tfoot>{generateTableFooter()}</tfoot>
            </table>
        </div>
    );
};

export default DataTable;
