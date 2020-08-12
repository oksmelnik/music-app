import Select from "react-select";
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledSelect = styled.div`
    padding: 10px;
`

function SelectField({ list, setFilteredList }) {

    const filterList = (selected, triggeredAction) => {
        if (triggeredAction.action === 'clear') {
            setFilteredList(list)
            return
        }
        const newList = selected ? list.filter(i => selected.map(o => o.value).includes(i.id)) : list
        setFilteredList(newList)
    }

    return (
        <StyledSelect>
            <form data-testid="form">
                <label htmlFor="albm">Select by album name</label>
            <Select
                isMulti={true}
                options={list.map(album => ({
                    label: album.title,
                    value: album.id
                }))}
                name="albm"
                inputId="albm"
                onChange={filterList}
            />
            </form>
        </StyledSelect>
    );
}

export default SelectField;