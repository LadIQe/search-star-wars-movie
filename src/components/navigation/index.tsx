import { Menu } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { RoutesEnum } from '../../constants/Routes'

const Navigation: FC<RouteComponentProps> = ({ history }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    const pathname = history.location.pathname

    if (pathname === RoutesEnum.HOMEPAGE) {
      setSelectedKeys(['search'])
    } else if (pathname === RoutesEnum.FAVOURITES) {
      setSelectedKeys(['favourites'])
    } else {
      setSelectedKeys([])
    }
  }, [history.location.pathname])

  return (
    <Menu mode="horizontal" className="navigation" selectedKeys={selectedKeys}>
      <Menu.Item key="search">
        <Link to={RoutesEnum.HOMEPAGE}>Search Movie</Link>
      </Menu.Item>

      <Menu.Item key="favourites">
        <Link to={RoutesEnum.FAVOURITES}>Favourites</Link>
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(Navigation)
