import Select from "react-select";
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledSelect = styled.div`
    padding: 10px;
`

function SelectField({ list, setFilteredList }) {

    const filterList = (selected) => {
        const newList = selected.length === 0 ? list : list.filter(i => selected.map(o => o.value).includes(i.id))
        setFilteredList(newList)
    }

    return (
        <StyledSelect>
            <Select
                isMulti={true}
                options={list.map(album => ({
                    label: album.title,
                    value: album.id
                }))}
                onChange={filterList}
            />
        </StyledSelect>
    );
}

export default SelectField;