import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { navLinks, navLinksItem } from "./menu.module.css"

const Menu = () => {
  const menu = useStaticQuery(graphql`
    query {
      allWpMenuItem(sort: { fields: order, order: ASC }) {
        nodes {
          label
          uri
        }
      }
    }
  `)

  return (
    <nav>
      <ul className={navLinks}>
        {menu.allWpMenuItem.nodes.map(node => (
          <li className={navLinksItem}>
            <Link to={node.uri}>{node.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
