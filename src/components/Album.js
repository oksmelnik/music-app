import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components'
import noImage from '../assets/noImage.jpg'

const StyledAlbum = styled.div`
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
`

const Description = styled.div`
    text-align: left;
`

const FieldName = styled.span`
    font-weight: 600;
    line-height: 30px;
`

function Album({ albums, match }) {
    const getAlbum = () => ( albums &&  albums.length > 0 ) ?
        albums.filter(a => a.id === match.params.id)[0] : {}

    const [album, setAlbum ] = useState(getAlbum())

    useEffect(() => {
        setAlbum(getAlbum())
    }, [albums])

    const { title, imageBig, date, artist } = album

    return (
        <StyledAlbum>
            {
                album && (
                <Fragment>
                    <img src={imageBig}/>
                   <Description>
                       <div><FieldName>Title:</FieldName> {title}</div>
                       <div><FieldName>Artist:</FieldName> {artist}</div>
                       <div><FieldName>Release date:</FieldName> {date}</div>
                   </Description>
                </Fragment>)
            }
        </StyledAlbum>
    );
}

Album.defaultProps = {
    imageBig: noImage,
};

export default Album