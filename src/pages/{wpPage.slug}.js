import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import parse from "html-react-parser"
// import Seo from "../components/seo"

const Page = ({ data, children }) => {
  return (
    <main>
      <Layout>
        <h1>{data.wpPage.title}</h1>
        <section itemProp="description">{parse(data.wpPage.content)}</section>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

export default Page
