import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import noImage from '../assets/noImage.jpg'

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: left;
`

const StyledImage = styled.img`
     max-height: 40px;
     padding: 10px;
`

function ListItem({id, imageSmall, title, params}) {
    return (
        <Link to={`/${id}`} params={params}>
            <StyledItem>
                <StyledImage alt={`${title} album`} src={imageSmall}/>
                <span>{title}</span>
            </StyledItem>
        </Link>
    );
}
ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    imageSmall: noImage,
};

export default ListItem;