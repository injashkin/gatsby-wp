import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuLevel from "./menu-level"

const Menu = ({ className }) => {
  const menu = useStaticQuery(graphql`
    query {
      wpMenu {
        menuItems {
          nodes {
            id
            label
            uri
            parentId
            childItems {
              nodes {
                id
              }
            }
          }
        }
      }
    }
  `)

  let item = 10

  return (
    <nav className={className} role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          {menu.wpMenu.menuItems.nodes.map(
            node =>
              node.parentId === null &&
              (node.childItems.nodes.length === 0 ? (
                <Link className="navbar-item" to={node.uri}>
                  {node.label}
                </Link>
              ) : (
                node.childItems.nodes.length > 0 && (
                  <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link">{node.label}</Link>
                    <MenuLevel id={node.id} label={node.level}></MenuLevel>
                  </div>
                )
              ))
          )}
        </div>
      </div>
    </nav>
  )
}

export default Menu
