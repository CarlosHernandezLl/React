import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

    const [filter, setFilter] = useState('')

    const handleFilter = (category) => {
        setFilter(category)
    }

    const resetFilter = () => {
        setFilter('')
    }


    return (
        <FilterContext.Provider value={{
            filter: filter,
            handleFilter: handleFilter,
            resetFilter: resetFilter

        }}>
            {children}
        </FilterContext.Provider>
    )
}