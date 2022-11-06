import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { navLinks, navLinksItem } from "./menu.module.css"

const Menu = () => {
  const menu = useStaticQuery(graphql`
    query {
      allWpPage {
        nodes {
          title
          uri
        }
      }
    }
  `)

  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinksItem}>
          <Link to="/">Главная</Link>
        </li>
        {menu.allWpPage.nodes.map(node => (
          <li className={navLinksItem}>
            <Link to={node.uri}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
