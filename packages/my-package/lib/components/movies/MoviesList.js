import React, { PropTypes, Component } from 'react'
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core'

import Movies from '../../modules/movies/collection'
import MoviesItem from './MoviesItem'

const MoviesList = ({ results = [], currentUser, loading, loadMore, count, totalCount }) =>

  <div style={{ maxWidth: '500px', margin: '20px auto' }}>

    {/* user accounts placeholder */}

    {loading

      ? <Loading />

      : <div className='movies'>

        {/* new document form placeholder */}

        {/* documents list */}

        {results.map(movie => <MoviesItem key={movie._id} movie={movie} currentUser={currentUser} />)}

        {/* load more */}

        {totalCount > results.length
          ? <a href='#' onClick={e => { e.preventDefault(); loadMore() }}>Load More ({count}/{totalCount})</a>
          : <p>No more items.</p>
        }

      </div>
    }

  </div>

const options = {
  collection: Movies,
  fragmentName: 'MoviesItemFragment',
  limit: 5
}

export default withList(options)(withCurrentUser(MoviesList))
