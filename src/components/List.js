import React, { Fragment, useEffect, useState } from 'react';
import ListItem from './ListItem'
import SelectField from './Select'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    margin-bottom: 30px;
`
const List = ( { albums, pending, error } ) => {
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
            <StyledH1>Top 100 albums</StyledH1>
            {error && "No results from request"}
            {(!pending && !error )&& (<Fragment>
                <SelectField data-testid="form" list={list} setFilteredList={setFilteredList} />
                <div data-testid="list">
                    {
                        filteredList.map(item => <ListItem key={item.id} {...item} />)
                    }
                </div>
            </Fragment>)
            }
        </div>
    );
}

export default List

