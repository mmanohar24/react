import {useState} from 'react';

function useSort(data, config)
{
    const [sortOrder, setSetOrder] = useState(null);

    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) =>
        {
            if(sortBy && label !== sortBy)
            {
                setSetOrder('asc');
                setSortBy(label);
                return;
            }
    
            if(sortOrder === null)
            {
                setSetOrder('asc');
                setSortBy(label);
            }
            else if (sortOrder === 'asc')
            {
                setSetOrder('desc');
                setSortBy(label);
            }
            else if (sortOrder === 'desc')
            {
                setSetOrder(null);
            }
        }

    // 1. Sort only data if sortOrder and sortBy are not null
    // 2. Make a copy of the data array
    // 3. Find the correct sortValue function and use it for sorting

    let sortedData = data;
    if(sortOrder && sortBy)
    {
        const {sortValue} = config.find(column => column.label === sortBy)
        sortedData = [...data].sort(  (a, b) => 
        {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof valueA === 'string')
            {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            else
            {
                return (valueA - valueB) * reverseOrder
            }
        });
    }

    return {
        sortOrder, sortBy, setSortColumn, sortedData
    };
}

export default useSort;