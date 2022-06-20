import React, {useMemo} from 'react';

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(() => {
        let arr = []
        for (let i = 0; i < totalPages; i++) {
            arr.push(i + 1)
        }
        console.log(pagesArray.length)
        return arr
    }, [totalPages])
    return pagesArray
}


export default usePagination;