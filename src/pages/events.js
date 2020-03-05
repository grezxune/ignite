import React from "react"
import { graphql } from "gatsby"
import { Button, IconButton } from "@material-ui/core"
import { FaFacebookF } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log("Data!", edges)
  return (
    <Layout>
      <SEO title="Events" />
      <h1>Ignite Events</h1>
      <p>This is where you can find all events Ignite is planning to host.</p>
      {edges.map(({ node: { frontmatter } }) => {
        return (
          <div
            style={{
              padding: 12,
              background: "#eeeeee",
              marginTop: 12,
            }}
            key={frontmatter.path}
          >
            <div>
              <Button href={frontmatter.path} color={"primary"}>
                {frontmatter.title} - {frontmatter.date}
              </Button>
              <div style={{ display: "flex", marginTop: 12 }}>
                <IconButton href={frontmatter.facebookUrl} color="primary">
                  <FaFacebookF />
                </IconButton>
                <Button
                  href={frontmatter.ticketUrl}
                  color="primary"
                  variant="contained"
                >
                  Get Tickets
                </Button>
              </div>
            </div>
            <p style={{ marginTop: 12 }}>{frontmatter.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const gql = graphql`
  query EventList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY h:mm A")
            description
            facebookUrl
            ticketUrl
          }
        }
      }
    }
  }
`

export default SecondPage
