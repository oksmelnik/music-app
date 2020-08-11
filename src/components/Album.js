import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import fetchAlbumsAction from "../actions/fetchAlbums";

const StyledItem = styled.div`
    display: flex;
    align-items: left;
    padding: 10px;
`

function Album({ albums, match }) {
    const getAlbum = () => albums && albums.filter(a => a.id === match.params.id)[0]
    const [album, setAlbum ] = useState(getAlbum())

    useEffect(() => {
        setAlbum(getAlbum())
    }, [albums])

    return (
        <StyledItem>
            {album && (
                <>
                <img src={album.imageBig}/>
            {album.title}
            {album.date}
            </>)
            }
        </StyledItem>
    );
}

export default Album