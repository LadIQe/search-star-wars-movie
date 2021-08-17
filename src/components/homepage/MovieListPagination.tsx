import { Pagination } from 'antd'
import React, { FC } from 'react'

type Props = {
  page: number
  total: number
  onChange?: (newPage: number) => void
}

const MovieListPaginationn: FC<Props> = ({ page, total, onChange }) => {
  return <Pagination current={page} onChange={onChange} total={total} hideOnSinglePage showSizeChanger={false} />
}

export default MovieListPaginationn
