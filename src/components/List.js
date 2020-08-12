import React, { Fragment, useEffect, useState } from 'react';
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
            {!pending && (<Fragment>
                <SelectField data-testid="form" list={list} setFilteredList={setFilteredList} />
                <div data-testid="list">{ filteredList.map(item => <ListItem key={item.id} {...item} />)}</div>
            </Fragment>)
            }
        </div>
    );
}

export default List