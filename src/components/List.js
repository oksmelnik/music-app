import React, { useEffect, useState } from 'react';
import ListItem from './ListItem'
import SelectField from './Select'


const List = ( { albums, pending } ) => {
    const [ list, setList ] = useState([])
    const [ filteredList, setFilteredList ] = useState([])

    useEffect(() => {
        setList(albums)
    }, [albums])

    useEffect(() => {
        setFilteredList(list)
    }, [list])

    return (
        <div>
            <h1>Music albums</h1>
            {!pending && <SelectField list={list} setFilteredList={setFilteredList}/>}
            {
                filteredList.map(item => <ListItem key={item.id} {...item} />)
            }
        </div>
    );
}

export default List