import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavDropdown from "react-bootstrap/NavDropdown"

//import { nested, dropdown, buttonEl } from "./menu.module.scss"

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
    <>
      {menuLevel.wpMenu.menuItems.nodes.map(
        node =>
          node.parentId === props.id &&
          (node.childItems.nodes.length === 0 ? (
            <NavDropdown.Item href={node.uri}>{node.label}</NavDropdown.Item>
          ) : (
            node.childItems.nodes.length > 0 && (
              <div className="dropend">
                <NavDropdown title={node.label}>
                  <MenuLevel id={node.id} label={node.level}></MenuLevel>
                </NavDropdown>
              </div>
            )
          ))
      )}
    </>
  )
}

export default MenuLevel
