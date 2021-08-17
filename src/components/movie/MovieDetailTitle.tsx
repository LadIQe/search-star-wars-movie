import React, { FC } from 'react'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'

type Props = {
  title?: string
  isFavourite: boolean
  onClick: () => void
}

const MovieDetailTitle: FC<Props> = ({ title, onClick, isFavourite }) => {
  return (
    <h1>
      {title ? (
        <>
          {title} {isFavourite ? <HeartFilled onClick={onClick} /> : <HeartOutlined onClick={onClick} />}
        </>
      ) : (
        'Title'
      )}
    </h1>
  )
}

export default MovieDetailTitle
