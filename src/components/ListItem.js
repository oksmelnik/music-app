import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledItem = styled.div`
    display: flex;
    align-items: left;
    padding: 10px;
`

function ListItem(props) {
    return (
        <Link to={`/${props.id}`} params={props}>
            <StyledItem>
                <img src={props.image}/>
                {props.title}
            </StyledItem>
        </Link>
    );
}

export default ListItem;