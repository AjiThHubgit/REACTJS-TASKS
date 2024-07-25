export const setValueToLocalStorage = (setString, setValue) => {
    localStorage.setItem(setString, JSON.stringify(setValue));
}

export const getValueFromLocalStorage = (setString) => {
    return localStorage.getItem(setString);
}

export const removeValueFromLocalStorage = (setString) => {
    return localStorage.removeItem(setString);
}

export const getDatesInRange = (startDate, endDate) => {
    const dateArray = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        const formattedDate = formatDate(currentDate);
        dateArray.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
}

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// export const getDatesInRange = (startDate, endDate) => {
//     const dateArray = [];
//     let currentDate = new Date(startDate);
//     const end = new Date(endDate);

//     while (currentDate <= end) {
//         const formattedDate = currentDate.toISOString().split('T')[0];
//         dateArray.push(formattedDate);
//         currentDate.setDate(currentDate.getDate() + 1);
//     }

//     return dateArray;
// }
