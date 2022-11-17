import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

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

  return (
    <Navbar>
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            {menu.wpMenu.menuItems.nodes.map(
              node =>
                node.parentId === null &&
                (node.childItems.nodes.length === 0 ? (
                  <Nav.Link href={node.uri}>{node.label}</Nav.Link>
                ) : (
                  node.childItems.nodes.length > 0 && (
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <MenuLevel id={node.id} label={node.level}></MenuLevel>
                    </NavDropdown>
                  )
                ))
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
