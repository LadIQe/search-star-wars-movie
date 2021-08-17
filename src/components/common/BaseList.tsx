import { Avatar, List } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutesEnum } from '../../constants/Routes'
import { MovieItem, MovieListItem } from '../../types/MovieTypes'

type Props = {
  data: MovieItem[] | MovieListItem[]
  loading?: boolean
}

const BaseList: FC<Props> = ({ data, loading }) => (
  <List
    itemLayout="horizontal"
    loading={loading}
    dataSource={data}
    renderItem={(item, i) => (
      <List.Item key={i}>
        <List.Item.Meta
          avatar={<Avatar src={item.Poster} />}
          title={<Link to={`${RoutesEnum.MOVIE_DETAIL}/${item.imdbID}`}>{item.Title}</Link>}
          description={item.Year}
        />
      </List.Item>
    )}
  />
)

export default BaseList
