import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RoutesEnum } from '../constants/Routes'
import Favourites from '../pages/Favourites'
import Homepage from '../pages/Homepage'
import MovieDetail from '../pages/MovieDetail'

const Routes = () => (
  <Switch>
    <Route exact path={RoutesEnum.HOMEPAGE} component={Homepage} />
    <Route exact path={RoutesEnum.MOVIE_DETAIL_WITH_ID} component={MovieDetail} />
    <Route exact path={RoutesEnum.FAVOURITES} component={Favourites} />

    <Route path="*" component={Homepage} />
  </Switch>
)

export default Routes
