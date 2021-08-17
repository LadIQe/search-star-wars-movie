import { Card, Image } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'
import InfoRenderer from '../components/movie/InfoRenderer'
import MovieDetailTitle from '../components/movie/MovieDetailTitle'
import { actionFetchMovieDetail } from '../store/actions/Actions'
import { ReduxStateTypes } from '../store/reducers/States'
import { MovieItem } from '../types/MovieTypes'
import { addMovieToStorage, loadMoviesFromStorage, removeMovieFromStorage } from '../utils/LocalStorageUtils'

type StateProps = {
  isFetching: boolean
  movie: ReduxStateTypes.MovieState['movieDetail']
}
type DispatchProps = {
  fetchMovieDetail: typeof actionFetchMovieDetail
}
type Props = StateProps & DispatchProps & RouteComponentProps

const MovieDetail: FC<Props> = ({ fetchMovieDetail, history, isFetching, movie }) => {
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    const id = history.location.pathname.split('/').pop()

    if (id) {
      fetchMovieDetail(id)

      const favourites = loadMoviesFromStorage()
      const actualMovie = favourites.find((item) => item.imdbID === id)

      if (actualMovie) {
        setIsFavourite(true)
      }
    }
  }, [])

  const toggleFavourites = () => {
    if (isFavourite) {
      removeMovieFromStorage(movie!.imdbID)
    } else {
      addMovieToStorage(movie!)
    }

    setIsFavourite((prevState) => !prevState)
  }

  const stringifyRatings = (ratings: MovieItem['Ratings']) => ratings.map((rate) => `${rate.Source}: ${rate.Value}`).join('\n')

  return (
    <div className="detail-wrapper">
      <Card
        title={<MovieDetailTitle title={movie?.Title} onClick={toggleFavourites} isFavourite={isFavourite} />}
        bordered={false}
        loading={isFetching}
      >
        <Card.Grid style={{ width: '33%', boxShadow: 'none' }} hoverable={false}>
          <Image src={movie?.Poster || ''} />
        </Card.Grid>

        <Card.Grid style={{ width: '66%', boxShadow: 'none' }} hoverable={false}>
          <InfoRenderer title="Actors:" content={movie?.Actors || ''} />
          <InfoRenderer title="Awards:" content={movie?.Awards || ''} />
          <InfoRenderer title="BoxOffice:" content={movie?.BoxOffice || ''} />
          <InfoRenderer title="Country:" content={movie?.Country || ''} />
          <InfoRenderer title="DVD:" content={movie?.DVD || ''} />
          <InfoRenderer title="Director:" content={movie?.Director || ''} />
          <InfoRenderer title="Genre:" content={movie?.Genre || ''} />
          <InfoRenderer title="Language:" content={movie?.Language || ''} />
          <InfoRenderer title="Metascore:" content={movie?.Metascore || ''} />
          <InfoRenderer title="Plot:" content={movie?.Plot || ''} />
          <InfoRenderer title="Production:" content={movie?.Production || ''} />
          <InfoRenderer title="Rated:" content={movie?.Rated || ''} />
          <InfoRenderer title="Ratinngs:" content={movie ? stringifyRatings(movie.Ratings) : ''} />
          <InfoRenderer title="Released:" content={movie?.Released || ''} />
          <InfoRenderer title="Runtime:" content={movie?.Runtime || ''} />
          <InfoRenderer title="Type:" content={movie?.Type || ''} />
          <InfoRenderer title="Website:" content={movie?.Website || ''} />
          <InfoRenderer title="Year:" content={movie?.Year || ''} />
          <InfoRenderer title="IMDB ID:" content={movie?.imdbID || ''} />
          <InfoRenderer title="IMDB Rating:" content={movie?.imdbRating || ''} />
          <InfoRenderer title="IMDB Votes:" content={movie?.imdbVotes || ''} />
        </Card.Grid>
      </Card>
    </div>
  )
}

const mapStateToProps = (state: ReduxStateTypes.DefaultState): StateProps => ({
  isFetching: state.movie.isFetching,
  movie: state.movie.movieDetail,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchMovieDetail: bindActionCreators(actionFetchMovieDetail, dispatch),
})

export default connect<StateProps, DispatchProps, RouteComponentProps, ReduxStateTypes.DefaultState>(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail)
