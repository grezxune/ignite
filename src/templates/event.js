import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { FaFacebookF } from "react-icons/fa"
import { Button, IconButton } from "@material-ui/core"

export default ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <div>
          <h1 style={{ marginBottom: 0 }}>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
          <div style={{ marginTop: 12 }}>
            <h3 style={{ margin: 0 }}>Description</h3>
            <p>{frontmatter.description}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {frontmatter.facebookUrl && (
              <div>
                <IconButton href={frontmatter.facebookUrl} color="primary">
                  <FaFacebookF />
                </IconButton>
              </div>
            )}
            {frontmatter.ticketUrl && (
              <div>
                <Button
                  href={frontmatter.ticketUrl}
                  color="primary"
                  variant="contained"
                >
                  Get Tickets!
                </Button>
              </div>
            )}
          </div>
          <div
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY h:mm A")
        path
        title
        description
        ticketUrl
        facebookUrl
      }
    }
  }
`
