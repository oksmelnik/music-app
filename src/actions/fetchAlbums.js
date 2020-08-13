import axiosList from './../axios-list'
import { fetchAlbumsPending, fetchAlbumsSuccess, fetchAlbumsError } from './index';

function fetchAlbums() {
    return dispatch => {
        dispatch(fetchAlbumsPending());
        axiosList.get('topalbums/limit=100/json')
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }

                const albums = res.data.feed.entry.map(item => ({
                    id: item.id.attributes['im:id'],
                    imageSmall: item['im:image'][0].label,
                    imageBig: item['im:image'][2].label,
                    title: item.title.label,
                    date: item['im:releaseDate'].attributes.label,
                    artist: item['im:artist'].label
                })
                )
                dispatch(fetchAlbumsSuccess(albums))

                return albums;
            })
            .catch(error => {
                dispatch(fetchAlbumsError(error));
            })
    }
}

export default fetchAlbums;
