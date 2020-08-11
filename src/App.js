import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List'
import Album from './components/Album'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchAlbumsAction  from './actions/fetchAlbums'

const App = ({ fetchAlbums, albums, pending }) => {

    useEffect(() => {
        fetchAlbums()
    }, [])

  return (
      <Router>
          <div className="App">
              <Route path="/" exact
                     render={() => (
                        <List albums={albums} pending={pending} />
                    )}
             />

             <Route path="/:id" exact
                    render={(props) => (
                        <Album albums={albums} pending={pending} {...props}/>
                    )}
             />

         </div>
      </Router>
  );
}

const mapStateToProps = state => {
    return {...state.albumReducer}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbumsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
