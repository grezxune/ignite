import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Ignite Events</h1>
    <p>This is where you can find all events Ignite is planning to host.</p>
    <ul>
      <li>
        <Link to="/votingIntro">Voting Introduction</Link>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
