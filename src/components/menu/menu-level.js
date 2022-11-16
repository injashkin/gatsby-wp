import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

// import { nested, dropdown, buttonEl } from "./menu.module.scss"

const MenuLevel = props => {
  const menuLevel = useStaticQuery(graphql`
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

  return (
    <div className="navbar-dropdown">
      {menuLevel.wpMenu.menuItems.nodes.map(
        node =>
          node.parentId === props.id &&
          (node.childItems.nodes.length === 0 ? (
            <Link className="navbar-item">{node.label}</Link>
          ) : (
            node.childItems.nodes.length > 0 && (
              <div className="nested navbar-item dropdown">
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>{node.label}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <MenuLevel id={node.id} label={node.level}></MenuLevel>
                  </div>
                </div>
              </div>
            )
          ))
      )}
    </div>
  )
}

export default MenuLevel
