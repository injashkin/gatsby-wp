import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Menu from "./menu/menu"

//import Image from "react-bootstrap/Image"
//import BgImage from "./bg-image/bg-image"
import Hero from "./hero/hero"
import BgImage from "./bg-image/bg-image"
import ImageUrl from "../../static/hero-image.jpg"
//import Button from "react-bootstrap/Button"
//import Card from "react-bootstrap/Card"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <BgImage image={ImageUrl} height="700px">
        <div className="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              {isHomePage ? (
                <h1 className="main-heading">
                  <Link to="/">{parse(title)}</Link>
                </h1>
              ) : (
                <Link className="header-link-home" to="/">
                  {title}
                </Link>
              )}
            </a>

            <Menu className="navbar"></Menu>
          </header>

          <Hero></Hero>
        </div>
      </BgImage>

      <main>{children}</main>

      <footer class="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
