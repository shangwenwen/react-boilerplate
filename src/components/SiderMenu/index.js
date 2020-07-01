import React, { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom'
// routeconfig
import routes from '../../config/routes'
// antd ui
import { Menu } from 'antd'

export default function SiderMenu() {
  const location = useLocation()

  let openKey = ''
  let menuNodes = renderMenu(routes)

  function renderMenu(routes) {
    return routes.map(({ key, title, children, icon }) => {
      if (!children) {
        return (
          <Menu.Item key={key} icon={icon}>
            <Link to={key}>{title}</Link>
          </Menu.Item>
        )
      } else {
        if (children.find(item => location.pathname === item.key)) {
          openKey = key
        }

        return (
          <Menu.SubMenu key={key} title={title} icon={icon}>
            {renderMenu(children)}
          </Menu.SubMenu>
        )
      }
    })
  }

  return (
    <Fragment>
      <Menu theme='dark' selectedKeys={location.pathname} mode='inline' defaultOpenKeys={[openKey]}>
        {menuNodes}
      </Menu>
    </Fragment>
  )
}
